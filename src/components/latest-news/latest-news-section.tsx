import { getFacebookPosts } from "@/lib/facebook";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { PostPreview } from "./post-preview";
import { NoDataInfo } from "../ui/NoDataInfo";
import { HorizontalRule } from "../ui/horizontal-rule";
import { HomepageHeader } from "../ui/homepage-header";

export async function LatestNews({}) {
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
          posts.slice(0, 3).map((post, idx) => (
            <Fragment key={`post-preview-${idx}`}>
              <PostPreview post={post} />
              <HorizontalRule />
            </Fragment>
          ))
        )}
      </div>
      <div className="mb-10 mt-5 flex justify-center md:text-lg lg:mt-10 lg:text-2xl">
        <Link href="/news">Przejrzyj więcej aktualności</Link>
        <ArrowUpRight />
      </div>
    </div>
  );
}
