/**
 * Module containing functions related to the Facebook API.
 *
 * Access tokens must be generated using the Facebook Graph API Explorer.
 *
 * Currently required user token permissions:
 * - `user_posts` to retrieve the user's posts
 * - `user_photos` to retrieve the user's profile picture
 * - `user_link` to retrieve the user's profile link
 * - `public_profile` (all access tokens require it)
 */
import type { FacebookAccessToken, FacebookPost, FacebookUser } from "./types";

const FACEBOOK_API_URL = "https://graph.facebook.com/v21.0";

/** The maximum number of attachments to fetch for each Facebook post. */
const POST_ATTACHMENT_LIMIT = 10;

let user: FacebookUser | null = null;

let getAccessTokenPromise: null | Promise<string | null> = null;

/**
 * Retrieves the saved Facebook long-lived access token.
 * If it's the first time calling this function, it generates a long-lived access token
 * from the short-lived one, which is stored in the environment variable `FACEBOOK_ACCESS_TOKEN`.
 */
async function getAccessToken() {
  if (getAccessTokenPromise != null) {
    return getAccessTokenPromise;
  }
  const existingToken = process.env.FACEBOOK_LONG_LIVED_ACCESS_TOKEN;
  if (existingToken != null) {
    return existingToken;
  }
  const shortLivedToken = process.env.FACEBOOK_ACCESS_TOKEN ?? "";
  if (!shortLivedToken) {
    console.error("No short-lived access token set for Facebook API");
    return null;
  }
  const clientId = process.env.FACEBOOK_APP_ID ?? "";
  const clientSecret = process.env.FACEBOOK_APP_SECRET ?? "";
  if (!clientId || !clientSecret) {
    console.error("No app ID or secret set for Facebook API");
    return null;
  }
  const path = `oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&fb_exchange_token=${shortLivedToken}&grant_type=fb_exchange_token`;
  const response = await fetchFromFacebook<FacebookAccessToken>(
    path,
    "",
    false,
  );
  if (response?.access_token === undefined) {
    console.error(
      "Failed to generate long-lived access token from Facebook API",
    );
    return null;
  }
  // Save the long-lived access token for future calls
  return response.access_token;
}

async function fetchFromFacebook<T>(
  path: string,
  fields = "",
  useAuthentication = true,
): Promise<T | null> {
  try {
    const url = new URL(`${FACEBOOK_API_URL}/${path}`);
    if (fields) {
      url.searchParams.append("fields", fields);
    }
    const options: RequestInit = {};
    // Can't define options.headers and options.next immediately when declaring `options` because TypeScript later complains they may be undefined
    options.headers = {};
    options.next = {};
    if (useAuthentication) {
      getAccessTokenPromise = getAccessToken();
      const token = await getAccessTokenPromise;
      if (token == null || token === "") {
        console.error("No long-lived access token set for Facebook API");
        return null;
      }
      // Cache responses for posts, user data etc. for 5 minutes
      options.next.revalidate = 300;
      options.headers.Authorization = `Bearer ${token}`;
    } else {
      // Don't cache responses for generating access tokens
      options.next.revalidate = 0;
    }
    const response = await fetch(url.toString(), options);
    const data = (await response.json()) as T;
    if (!response.ok) {
      console.error(
        "Bad response from Facebook API:",
        response.status,
        response.statusText,
        data,
      );
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

/**
 * Retrieves the saved Facebook user data.
 * If it's the first time calling this function, it fetches the user data from Facebook and saves it for future calls.
 * If a previous call failed, it will re-attempt to fetch the user data.
 */
export const getFacebookUser = async () =>
  (user ??= await fetchFromFacebook<FacebookUser>(
    "me",
    "id,name,picture,link",
  ));

/** Retrieves all non-empty Facebook posts made by the user with the current access token, in reverse chronological order (newest first). */
export async function getFacebookPosts(): Promise<
  (FacebookPost & { updatedTimestamp: number })[] | null
> {
  const data = await fetchFromFacebook<{ data: FacebookPost[] }>(
    "me/posts",
    `id,message,name,shares,created_time,updated_time,permalink_url,attachments.limit(${POST_ATTACHMENT_LIMIT.toString()}){media,subattachments}`,
  );
  const posts = data?.data;
  if (posts === undefined) {
    console.warn(data);
    return null;
  }
  return (
    posts
      // Ensure the posts are not empty (e.g. timeline events like being born)
      .filter((post) => post.message != null && post.message.length > 0)
      .map((post) => ({
        ...post,
        updatedTimestamp: new Date(post.updated_time).getTime(),
      }))
      .sort((a, b) => b.updatedTimestamp - a.updatedTimestamp)
  );
}
