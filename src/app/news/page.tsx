import { getNewsPosts } from "@/lib/news";
import type { FacebookUser } from "@/lib/types";

import { NewsErrorMessage } from "./components/news-error-message";
import { Post } from "./components/post";

const NEWS_AUTHOR: FacebookUser = {
  id: "123",
  name: "Juwenalia Wrocławskie",
  link: "https://www.facebook.com/JuwenaliaWroclawskie",
  picture: {
    data: {
      url: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/481904307_1073840988119857_2833325521447242521_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OlZU2AYQ6RYQ7kNvwGLBGzZ&_nc_oc=Adl4Lg2zERBTYaScq11s2Bm7QFUlbli6qBjU0LaftRa8K1OiZH_MoFJReS59WkMnFwM&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=_tCYdZ1ql4X94XGdZgdUtw&oh=00_AfE6_3T9wg1F0lARuV0uZ8Zem_-5Iy39DQjztPGqYCMpbw&oe=67F8B276",
      width: 64,
      height: 64,
      is_silhouette: false,
    },
  },
};

export default async function NewsPage() {
  const posts = await getNewsPosts();

  return (
    <div className="mt-48 flex flex-col items-center gap-5">
      <h1 className="m-3 mb-0 text-center font-extrabold text-gray-800 sm:text-2xl md:text-3xl">
        Najnowsze aktualności
      </h1>
      <hr className="w-full" />
      {posts == null ? (
        <NewsErrorMessage type="network" />
      ) : posts.length === 0 ? (
        <NewsErrorMessage type="noPosts" />
      ) : (
        <div className="flex w-full flex-col items-stretch md:items-center">
          {posts.map((post) => (
            <Post key={post.id} post={post} author={NEWS_AUTHOR} />
          ))}
        </div>
      )}
    </div>
  );
}
