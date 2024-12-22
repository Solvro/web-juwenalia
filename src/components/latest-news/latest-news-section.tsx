import { ArrowRight } from "lucide-react";
import { Fragment } from "react";

import { Button } from "@/components/button";
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
              <Button
                variant="ghost"
                className="group flex hover:bg-transparent"
              >
                <span className="text-lg font-light !normal-case md:text-xl">
                  Przejrzyj więcej aktualności
                </span>
                <ArrowRight className="ease-[cubic-bezier(0.85,0,0.15,1)] mb-1 ml-3 inline-flex -rotate-45 scale-[1.7] stroke-1 transition-transform group-hover:-translate-y-1/4 group-hover:translate-x-1/4 md:scale-[1.8]" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
