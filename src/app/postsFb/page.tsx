import SignIn from "@/components/signIn";
import { getUser } from "@/lib/auth";
import { getFacebookPosts } from "@/lib/facebook";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Post } from "./components/post";

export default async function FbPage() {
  const user = await getUser();
  const posts = await getFacebookPosts(user);

  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">
        Facebook Posts Demo
      </h1>
      {null == user ? (
        <SignIn />
      ) : null == posts ? (
        <Alert className="w-1/2" variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Failed to load Facebook posts. Try again later.
          </AlertDescription>
        </Alert>
      ) : posts.length === 0 ? (
        <Alert className="w-1/2">
          <AlertTitle>Feed Empty</AlertTitle>
          <AlertDescription>
            There are no posts available at the moment. Please check back later.
          </AlertDescription>
        </Alert>
      ) : (
        posts.map((post, idx) => <Post key={idx} post={post} author={user} />)
      )}
    </div>
  );
}
