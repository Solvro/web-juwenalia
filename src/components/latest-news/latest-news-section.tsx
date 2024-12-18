import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

import { getFacebookPosts } from "@/lib/facebook";

import { HomepageHeader } from "../homepage-header";
import { HorizontalRule } from "../horizontal-rule";
import { NoDataInfo } from "../no-data-info";
import { Underlined } from "../underlined";
import { PostPreview } from "./post-preview";

export async function LatestNews() {
  const posts = await getFacebookPosts();
  return (
    <div className="text-xs sm:text-sm md:text-base">
      <HomepageHeader>Najnowsze aktualności</HomepageHeader>
      <div className="flex flex-col items-center md:items-start md:gap-5 lg:gap-10">
        <HorizontalRule />
        {posts == null ? (
          <div className="self-center">
            <NoDataInfo
              errorTitle="Brak aktualności"
              errorMessage="Nie udało nam się znaleźć żadnych aktualności. Wróć tutaj później!"
            />
          </div>
        ) : (
          posts.slice(0, 3).map((post) => (
            <Fragment key={post.id}>
              <PostPreview post={post} />
              <HorizontalRule />
            </Fragment>
          ))
        )}
      </div>
      <div className="mb-10 mt-5 flex items-center justify-center gap-1 md:text-lg lg:mt-10 lg:text-2xl">
        <Underlined tag={Link} href="/news">
          Przejrzyj więcej aktualności
        </Underlined>
        <ArrowUpRight />
      </div>
    </div>
  );
}
