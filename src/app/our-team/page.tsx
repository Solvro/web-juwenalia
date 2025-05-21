import { PersonCardList } from "@/components/about-us/person-card-list";
import { PaddingWrapper } from "@/components/padding-wrapper";
import { PageHeader } from "@/components/page-header";
import { fetchData } from "@/lib/api";
import type { Person } from "@/lib/types";

export default async function AboutUsPage() {
  const result = await fetchData<{ data: Person[] }>(
    "items/persons?fields=name, title, image, role",
  );
  // Wyświetlamy całą listę osób zamiast tylko tych ze starszą wartością title === "1"
  const staff = result.data;

  return (
    <div className="mt-48">
      <PageHeader>Nasz zespół</PageHeader>
      <PaddingWrapper className="mt-8">
        <PersonCardList people={staff} />
      </PaddingWrapper>
    </div>
  );
}
