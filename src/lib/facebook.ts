/**
 * Module containing functions related to the Facebook API.
 *
 * Access tokens must be generated using the Facebook Graph API Explorer.
 *
 * Currently required user token permissions:
 * - `user_posts` to retrieve the user's posts
 * - `user_photos` to retrieve the user's profile picture
 * - `public_profile` (all access tokens require it)
 */

import { FacebookAccessToken, FacebookPost, FacebookUser } from "./types";

const FACEBOOK_API_URL = "https://graph.facebook.com/v21.0";

let user: FacebookUser | null = null;
let accessToken: string = "";

/**
 * Retrieves the saved Facebook long-lived access token.
 * If it's the first time calling this function, it generates a long-lived access token
 * from the short-lived one, which is stored in the environment variable `FACEBOOK_ACCESS_TOKEN`.
 */
async function getAccessToken() {
  if (accessToken) return accessToken;
  const shortLivedToken = process.env.FACEBOOK_ACCESS_TOKEN || "";
  if (!shortLivedToken) {
    console.error("No short-lived access token set for Facebook API");
    return null;
  }
  const clientId = process.env.FACEBOOK_APP_ID || "";
  const clientSecret = process.env.FACEBOOK_APP_SECRET || "";
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
  if (!response || !response.access_token) {
    console.error(
      "Failed to generate long-lived access token from Facebook API",
    );
    return null;
  }
  // Save the long-lived access token for future calls
  accessToken = response.access_token;
  return accessToken;
}

async function fetchFromFacebook<T>(
  path: string,
  fields: string = "",
  useAuthentication: boolean = true,
): Promise<T | null> {
  try {
    const url = new URL(`${FACEBOOK_API_URL}/${path}`);
    if (fields) {
      url.searchParams.append("fields", fields);
    }
    const headers: RequestInit["headers"] = {};
    if (useAuthentication) {
      const token = await getAccessToken();
      if (!token) {
        console.error("No long-lived access token set for Facebook API");
        return null;
      }
      console.log(token);
      headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(url.toString(), { headers });
    const data = await response.json();
    if (!response.ok) {
      console.error(response.status, response.statusText, data);
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
    "id,message,name,permalink_url,shares,created_time,updated_time,full_picture",
  );
  const posts = data?.data;
  if (!posts) {
    console.warn(data);
    return null;
  }
  return (
    posts
      // Ensure the posts are not empty (e.g. timeline events like being born)
      .filter((post) => post?.message)
      .map((post) => ({
        ...post,
        updatedTimestamp: new Date(post.updated_time).getTime(),
      }))
      .sort((a, b) => b.updatedTimestamp - a.updatedTimestamp)
  );
}
