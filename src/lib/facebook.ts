import { FacebookUser } from "./auth";

// const FACEBOOK_API_URL = "https://graph.facebook.com/me/posts?access_token=";
const FACEBOOK_API_URL = "https://graph.facebook.com/v21.0";

export interface FacebookPost {
  id: string;
  title?: string;
  message?: string;
  full_picture?: string;
  permalink_url: string;
  created_time: string;
  updated_time: string;
}

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
    return await fetch(
      `${FACEBOOK_API_URL}/${path}?access_token=${user?.accessToken}&fields=${fields}`
    );
  } catch {
    return null;
  }
}

export async function getFacebookPosts(user: FacebookUser | null) {
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
    .sort(
      (a, b) =>
        new Date(b.updated_time).getTime() - new Date(a.updated_time).getTime()
    );
}
