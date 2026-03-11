import { TeamList } from "@/components/about-us/team";
import { PaddingWrapper } from "@/components/padding-wrapper";
import { PageHeader } from "@/components/page-header";
import { fetchData } from "@/lib/api";
import { fetchCreators } from "@/lib/creators";
import type { Person } from "@/lib/types";

export default async function AboutUsPage() {
  const [result, creators] = await Promise.all([
    fetchData<{ data: Person[] }>(
      "items/persons?fields=name, title, image, role",
    ),
    fetchCreators(),
  ]);

  // Wyświetlamy całą listę osób zamiast tylko tych ze starszą wartością title === "1"
  const staff = result.data;

  return (
    <div className="mt-48">
      <PageHeader>Nasz zespół</PageHeader>
      <PaddingWrapper className="mt-8">
        <TeamList staff={staff} creators={creators} />
      </PaddingWrapper>
    </div>
  );
}
