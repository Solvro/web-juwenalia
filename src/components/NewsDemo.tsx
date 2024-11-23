import { NewsProps } from "@/lib/types";
import { fetchData } from "@/lib/api";

export const NewsDemo = async () => {
  const response = await fetchData<{ data: NewsProps[] }>("items/news");
  const news = response.data.map((post) => ({
    ...post,
    date_created: new Date(post.date_created),
  }));

  // Sortowanie news'ów od najnowszych, w przyszłości może to nie wystarczyć (przypięte/customowa kolejność)
  const newsSortedByDate = news.sort(
    (a, b) => b.date_created.getTime() - a.date_created.getTime()
  );

  return (
    <div className="p-2 flex flex-col items-center">
      <h1 className="font-semibold text-3xl">Newsy Juwenaliowe</h1>

      {newsSortedByDate.map((post) => (
        <div
          key={post.id}
          className="p-4 container border-2 rounded-md border-black m-2"
        >
          <h1 className="text-2xl text-center font-semibold mb-2">
            {post.name}
          </h1>
          <h1 className="text-sm">{post.date_created.toLocaleString()}</h1>
          <h1 className="text-xl">{post.content}</h1>
        </div>
      ))}
    </div>
  );
};
