import { NoDataInfo } from "@/components/no-data-info";
import { getFacebookPosts, getFacebookUser } from "@/lib/facebook";

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
        <NoDataInfo
          errorTitle="Błąd sieciowy"
          errorMessage="Nie udało się pobrać postów z Facebooka. Spróbuj ponownie później."
        />
      ) : posts.length === 0 ? (
        <NoDataInfo
          errorTitle="Brak postów"
          errorMessage="Nie ma obecnie żadnych postów do wyświetlenia."
        />
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
