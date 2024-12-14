import { getFacebookPosts } from "@/lib/facebook";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { PostPreview } from "./post-preview";
import { NoDataInfo } from "../ui/NoDataInfo";

export async function LatestNews({}) {
  const posts = await getFacebookPosts();
  return (
    <div className="flex flex-col items-center gap-5 text-sm">
      <h2 className="text-base font-extrabold">Najnowsze aktualności</h2>
      <hr className="w-full" />
      {posts == null ? (
        <NoDataInfo
          errorTitle="Brak postów"
          errorMessage="Nie ma żadnych aktualności do wyświetlenia"
        />
      ) : (
        posts.slice(0, 3).map((post, idx) => (
          <Fragment key={`post-preview-${idx}`}>
            <PostPreview post={post} />
            <hr className="w-full" />
          </Fragment>
        ))
      )}
      <div className="mb-10 flex justify-center">
        <Link href="/news">Przejrzyj więcej aktualności</Link>
        <ArrowUpRight />
      </div>
    </div>
  );
}
