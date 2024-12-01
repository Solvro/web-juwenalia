import { NewsDemo } from "@/components/NewsDemo";

export default async function NewsPage({ params }: { params: { page: string } }) {
  const { page } = await params;
  return <NewsDemo page={parseInt(page)} />;
}
