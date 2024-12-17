import Image from "next/image";

import type { FacebookPost, FacebookUser } from "@/lib/types";

import { ShareButton } from "./share-button";

export function Post({
  author,
  post,
}: {
  author: FacebookUser;
  post: FacebookPost;
}) {
  return (
    <div className="w-1/3 rounded-xl border p-3">
      <div className="mb-3 flex items-center">
        <a href={author.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={author.picture.data.url}
            alt={author.name}
            width={author.picture.data.width}
            height={author.picture.data.height}
            className="rounded-full"
          />
        </a>
        <div className="ml-2 w-full">
          <p className="font-semibold">
            <a href={author.link} target="_blank" rel="noopener noreferrer">
              {author.name}
            </a>
          </p>
          <p
            className="flex items-center gap-1 text-sm text-gray-500"
            title={`last updated: ${new Date(
              post.updated_time,
            ).toLocaleString()}`}
          >
            {new Date(post.created_time).toLocaleString()}
            {post.updated_time && post.updated_time !== post.created_time ? (
              <span> (edited)</span>
            ) : null}
          </p>
        </div>
      </div>
      <p className="whitespace-pre-line border-t-2 pt-2">
        {post.message ?? <i className="italic text-slate-400">empty post</i>}
      </p>
      {post.full_picture === undefined ? null : (
        <Image
          src={post.full_picture}
          alt={"Facebook post image attachment"}
          className="my-4"
          width={800}
          height={0}
        />
      )}
      {post.permalink_url ? <ShareButton link={post.permalink_url} /> : null}
    </div>
  );
}
