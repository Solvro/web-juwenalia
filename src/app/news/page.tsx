import { getFacebookPosts, getFacebookUser } from "@/lib/facebook";

import { NewsErrorMessage } from "./components/news-error-message";
import { Post } from "./components/post";

export default async function FbPage() {
  const user = await getFacebookUser();
  const posts = await getFacebookPosts();

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="m-3 mb-0 text-center font-extrabold text-gray-800 sm:text-2xl md:text-3xl">
        Najnowsze aktualności
      </h1>
      <hr className="w-full" />
      {user == null || posts == null ? (
        <NewsErrorMessage type="network" />
      ) : posts.length === 0 ? (
        <NewsErrorMessage type="noPosts" />
      ) : (
        <div className="flex flex-col items-stretch md:items-center">
          {posts.map((post) => (
            <Post key={post.id} post={post} author={user} />
          ))}
        </div>
      )}
    </div>
  );
}
