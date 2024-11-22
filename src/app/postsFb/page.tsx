import Alert, { AlertType } from "@/components/alert";
import SignIn from "@/components/signIn";
import { isSignedIn } from "@/lib/auth";
import { getFacebookPosts } from "@/lib/facebook";
import Image from "next/image";

export default async function FbPage() {
  const posts = await getFacebookPosts();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">
        Facebook Posts Demo
      </h1>
      {isSignedIn() ? (
        null == posts ? (
          <Alert type={AlertType.ERROR}>Failed to load Facebook posts.</Alert>
        ) : posts.length === 0 ? (
          <Alert type={AlertType.INFO}>
            There are no posts available at the moment. Please check back later.
          </Alert>
        ) : (
          posts.map((post, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p>{post.message}</p>
              <Image src={post.picture} alt={post.title} className="my-4" />
              <p className="text-sm text-gray-500">
                {new Date(post.created_time).toLocaleString()}
              </p>
            </div>
          ))
        )
      ) : (
        <SignIn />
      )}
    </div>
  );
}
