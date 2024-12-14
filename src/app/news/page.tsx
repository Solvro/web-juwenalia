import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
      {user == null || posts == null || posts.length === 0 ? (
        <Alert className="w-1/2" variant="destructive">
          <AlertTitle>Błąd Sieciowy</AlertTitle>
          <AlertDescription>
            Nie udało się pobrać postów z Facebooka. Spróbuj ponownie później.
          </AlertDescription>
        </Alert>
      ) : posts.length === 0 ? (
        <Alert className="w-1/2">
          <AlertTitle>Brak Postów</AlertTitle>
          <AlertDescription>
            Nie ma obecnie żadnych postów do wyświetlenia.
          </AlertDescription>
        </Alert>
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
