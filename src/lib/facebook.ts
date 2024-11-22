import { getAccessToken } from "./auth";

const FACEBOOK_API_URL = "https://graph.facebook.com/me/posts?access_token=";

export interface FacebookPost {
  title: string;
  message: string;
  picture: string;
  created_time: string;
}

export async function getFacebookPosts() {
  const token = getAccessToken();
  if (!token) {
    console.warn("No access token (user not logged in)");
    return null;
  }
  const response = await fetch(FACEBOOK_API_URL + token);
  const data = await response.json();
  return data.data as FacebookPost[];
}
