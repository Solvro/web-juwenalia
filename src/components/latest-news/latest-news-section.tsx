import { fetchData } from "@/lib/api";
import { CURRENT_EDITION } from "@/lib/edition";
import type { NewsPost } from "@/lib/types";

import { LatestNewsSectionClient } from "./latest-news-section-client";

export async function LatestNews() {
  let posts;
  try {
    const response = await fetchData<{ data: NewsPost[] }>(
      `items/news?filter[edition][_contains]=${CURRENT_EDITION}`,
    );
    posts = response.data.toReversed();
  } catch (error) {
    console.error("Error fetching news posts:", error);
    return null;
  }

  if (posts.length === 0) {
    return null;
  }

  return <LatestNewsSectionClient posts={posts} />;
}
