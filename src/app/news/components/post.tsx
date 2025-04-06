import Image from "next/image";
import Link from "next/link";

import type { FacebookUser, NewsPost } from "@/lib/types";

export function Post({
  author,
  post,
}: {
  author: FacebookUser;
  post: NewsPost;
}) {
  return (
    <div className="m-3 mt-0 rounded-xl border p-3 text-sm md:m-10 md:mt-0 md:w-2/3 md:text-base xl:w-1/2">
      <div className="mb-3 flex items-center">
        <Link href={author.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={author.picture.data.url}
            alt={author.name}
            width={author.picture.data.width}
            height={author.picture.data.height}
            className="rounded-full"
          />
        </Link>
        <div className="ml-2 w-full">
          <p className="font-semibold">
            <Link href={author.link} target="_blank" rel="noopener noreferrer">
              {author.name}
            </Link>
          </p>
          <p
            className="flex items-center gap-1 text-xs text-gray-500 md:text-sm"
            title={`ostatnia modyfikacja: ${new Date(
              post.date_updated ?? post.date_created,
            ).toLocaleString("pl-PL")}`}
          >
            {new Date(post.date_created).toLocaleString("pl-PL")}
            {post.date_updated == null ||
            post.date_updated === post.date_created ? null : (
              <span> (edytowano)</span>
            )}
          </p>
        </div>
      </div>
      <p
        className="whitespace-pre-line border-t-2 pt-2"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      {/* <div className="flex flex-col items-center justify-center">
        <PostAttachments attachments={post.attachments?.data ?? []} />
        {post.permalink_url.length > 0 && <ShareButton post={post} />}
      </div> */}
    </div>
  );
}
