import { getFacebookPosts, getFacebookUser } from "@/lib/facebook";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Post } from "./components/post";

export default async function FbPage() {
  const user = await getFacebookUser();
  const posts = await getFacebookPosts();

  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">
        Facebook Posts Demo
      </h1>
      {!user || !posts ? (
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
        posts.map((post, idx) => <Post key={idx} post={post} author={user} />)
      )}
    </div>
  );
}
