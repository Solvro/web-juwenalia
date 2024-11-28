import { FacebookPost, FacebookUser } from "./types";

const FACEBOOK_API_URL = "https://graph.facebook.com/v21.0";

let user: FacebookUser | null = null;
let accessToken: string = "";

/**
 * Retrieves the saved Facebook access token.
 * Currently uses the environment variables, but could be modified to use a more secure method.
 */
const getAccessToken = async () =>
  (accessToken ||= process.env.FACEBOOK_ACCESS_TOKEN || "");

async function fetchFromFacebook<T>(
  path: string,
  fields: string = ""
): Promise<T | null> {
  const token = await getAccessToken();
  if (!token) {
    console.error("No access token set for Facebook API");
    return null;
  }
  try {
    const url = new URL(`${FACEBOOK_API_URL}/${path}`);
    if (fields) {
      url.searchParams.append("fields", fields);
    }
    const response = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${token}` },
    });
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
  (user ??= await fetchFromFacebook<FacebookUser>("me", "id,name,picture"));

/** Retrieves all non-empty Facebook posts made by the user with the current access token, in reverse chronological order (newest first). */
export async function getFacebookPosts(): Promise<
  (FacebookPost & { updatedTimestamp: number })[] | null
> {
  const data = await fetchFromFacebook<{ data: FacebookPost[] }>(
    "me/posts",
    "id,message,name,permalink_url,shares,created_time,updated_time,full_picture"
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
