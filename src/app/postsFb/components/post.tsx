import { FacebookPost, FacebookUser } from "@/lib/types";
import Image from "next/image";
import ShareButton from "./shareButton";

export function Post({
  author,
  post,
}: {
  author: FacebookUser;
  post: FacebookPost;
}) {
  return (
    <div className="border rounded-xl p-3 w-1/3">
      <div className="flex items-center mb-3">
        <Image
          src={author.profilePicture}
          alt={author.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="ml-2 w-full">
          <p className="font-semibold">{author.name}</p>
          <p
            className="flex items-center text-sm text-gray-500 gap-1"
            title={`last updated: ${new Date(
              post.updated_time
            ).toLocaleString()}`}
          >
            {new Date(post.created_time).toLocaleString()}
            {post.updated_time && post.updated_time != post.created_time && (
              <span> (edited)</span>
            )}
          </p>
        </div>
      </div>
      <p className="border-t-2 pt-2 whitespace-pre-line">
        {post.message || <i className="italic text-slate-400">empty post</i>}
      </p>
      {post.full_picture && (
        <Image
          src={post.full_picture}
          alt={"Facebook post image attachment"}
          className="my-4"
          width={800}
          height={0}
        />
      )}
      {post.permalink_url && <ShareButton link={post.permalink_url} />}
    </div>
  );
}
