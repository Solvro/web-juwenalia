import Link from "next/link";
import { Fragment } from "react";

import { NewsErrorMessage } from "@/app/news/components/news-error-message";
import { ArrowSeeMore } from "@/components/arrow-see-more";
import { getFacebookPosts } from "@/lib/facebook";

import { HomepageHeader } from "../homepage-header";
import { HorizontalRule } from "../horizontal-rule";
import { PostPreview } from "./post-preview";

export async function LatestNews() {
  const posts = await getFacebookPosts();

  return (
    <div className="text-xs sm:text-sm md:text-base">
      <HomepageHeader>Najnowsze aktualności</HomepageHeader>

      <div className="flex flex-col items-center md:items-start md:gap-5 lg:gap-10">
        <HorizontalRule />
        {posts == null ? (
          <NewsErrorMessage type="network" />
        ) : posts.length === 0 ? (
          <NewsErrorMessage type="noPosts" />
        ) : (
          <div className="w-full">
            {posts.slice(0, 3).map((post) => (
              <Fragment key={post.id}>
                <PostPreview post={post} />
                <HorizontalRule />
              </Fragment>
            ))}

            <div className="mt-6 grid w-full place-items-center md:mt-12">
              <Link href="/news">
                <ArrowSeeMore text="Przejrzyj więcej aktualności" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
