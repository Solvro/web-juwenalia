import { Fragment } from "react";

import { fetchData } from "@/lib/api";
import type { NewsPost } from "@/lib/types";

import { HomepageHeader } from "../homepage-header";
import { HorizontalRule } from "../horizontal-rule";
import { PostPreview } from "./post-preview";

export async function LatestNews() {
  let posts;
  try {
    const response = await fetchData<{ data: NewsPost[] }>("items/news");
    posts = response.data;
  } catch (error) {
    console.error("Error fetching news posts:", error);
    return null;
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="text-xs sm:text-sm md:text-base">
      <HomepageHeader>Najnowsze aktualności</HomepageHeader>

      <div className="flex flex-col items-center md:items-start md:gap-5 lg:gap-10">
        <HorizontalRule />
        <div className="w-full">
          {posts.slice(0, 3).map((post) => (
            <Fragment key={post.id}>
              <PostPreview post={post} />
              <HorizontalRule />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
