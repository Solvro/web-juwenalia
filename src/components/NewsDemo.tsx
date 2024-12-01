import { NewsProps } from "@/lib/types";
import { fetchData } from "@/lib/api";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const NewsDemo = async ({ page }: { page: number }) => {
  const newsOnPage = 3;
  const response = await fetchData<{ data: NewsProps[] }>(
    `items/news?limit=${newsOnPage}&offset=${newsOnPage * (page - 1)}`
  );
  const news = response.data.map((post) => ({
    ...post,
    date_created: new Date(post.date_created),
  }));

  const newsSortedByDate = news.reverse();

  const hasNextPage = news.length === newsOnPage;

  return (
    <div className="p-2 flex flex-col items-center">
      <h1 className="font-semibold text-3xl">Newsy Juwenaliowe</h1>
      <h1 className="text-sm">Strona {page}</h1>

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
      <div>
        <Pagination>
          <PaginationContent>
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href={`${page - 1}`}
                />
              </PaginationItem>
            )}
            {hasNextPage && (
              <PaginationItem>
                <PaginationNext
                  href={`${page + 1}`}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
