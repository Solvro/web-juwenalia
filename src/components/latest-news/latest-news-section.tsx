import Link from "next/link";
import { Fragment } from "react";

import { ArrowSeeMore } from "@/components/arrow-see-more";
import { getFacebookPosts } from "@/lib/facebook";

import { HomepageHeader } from "../homepage-header";
import { HorizontalRule } from "../horizontal-rule";
import { NoDataInfo } from "../no-data-info";
import { PostPreview } from "./post-preview";

export async function LatestNews() {
  const posts = await getFacebookPosts();

  return (
    <div className="text-xs sm:text-sm md:text-base">
      <HomepageHeader>Najnowsze aktualności</HomepageHeader>

      <div className="flex flex-col items-center md:items-start md:gap-5 lg:gap-10">
        <HorizontalRule />
        {posts == null ? (
          <div className="grid w-full place-items-center py-12">
            <NoDataInfo
              errorTitle="Brak aktualności"
              errorMessage="Nie udało nam się znaleźć żadnych aktualności. Wróć tutaj później!"
            />
          </div>
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
