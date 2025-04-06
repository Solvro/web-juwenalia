import { fetchData } from "./api";
import type { NewsPost } from "./types";

export async function getNewsPosts() {
  try {
    const response = await fetchData<{ data: NewsPost[] }>("items/news");
    return response.data;
  } catch (error) {
    console.error("Error fetching news posts:", error);
    return null;
  }
}
