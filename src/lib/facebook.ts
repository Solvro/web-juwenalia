import { FacebookPost, FacebookUser } from "./types";

const FACEBOOK_API_URL = "https://graph.facebook.com/v21.0";

async function fetchFromFacebook(
  user: FacebookUser | null,
  path: string,
  fields: string = ""
) {
  if (!user?.accessToken) {
    console.warn("No access token (user not logged in)");
    return null;
  }
  try {
    const url = new URL(`${FACEBOOK_API_URL}/${path}`);
    if (fields) {
      url.searchParams.append("fields", fields);
    }
    const response = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${user.accessToken}` },
    });
    if (!response.ok) {
      console.error(response.status, response.statusText);
      // Don't catch errors on `.json()` as the body might be empty
      response.json().then(console.error);
      return null;
    }
    return response;
  } catch {
    return null;
  }
}

export async function getFacebookPosts(
  user: FacebookUser | null
): Promise<(FacebookPost & { updatedTimestamp: number })[] | null> {
  // Fetch a list of all post ids
  const response = await fetchFromFacebook(
    user,
    "me/posts",
    "id,message,name,permalink_url,shares,created_time,updated_time,full_picture"
  );
  if (!response) return null;
  const data = await response.json();
  const posts: FacebookPost[] = data?.data;
  // Ensure the posts are not empty (e.g. timeline events like being born)
  if (!posts) {
    console.warn(data);
    return null;
  }
  return posts
    .filter((post) => post?.message)
    .map((post) => ({
      ...post,
      updatedTimestamp: new Date(post.updated_time).getTime(),
    }))
    .sort((a, b) => b.updatedTimestamp - a.updatedTimestamp);
}
