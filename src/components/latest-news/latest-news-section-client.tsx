"use client";

import Image from "next/image";
import { Fragment } from "react";

import { HomepageHeader } from "@/components/homepage-header";
import { HorizontalRule } from "@/components/horizontal-rule";
import { LeafComponent } from "@/components/leaf-component";
import type { NewsPost } from "@/lib/types";

import { PostPreview } from "./post-preview";

function LatestNewsSectionClient({ posts }: { posts: NewsPost[] }) {
  return (
    <div className="relative pt-24 text-xs sm:text-sm md:text-base">
      <HomepageHeader variant="alternative">
        Najnowsze aktualności
      </HomepageHeader>

      <LeafComponent className="absolute right-0 z-0 max-sm:bottom-[-150px] sm:top-10">
        <Image
          src="/bushes/tornado.svg"
          alt=""
          width={150}
          height={150}
          className="w-[150px] sm:w-[180px] md:w-[200px]"
        />
      </LeafComponent>

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

export { LatestNewsSectionClient };
