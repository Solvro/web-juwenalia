import { PersonCardList } from "@/components/about-us/person-card-list";
import { PaddingWrapper } from "@/components/padding-wrapper";
import { PageHeader } from "@/components/page-header";
import { fetchData } from "@/lib/api";
import type { Person } from "@/lib/types";

export default async function AboutUsPage() {
  const result = await fetchData<{ data: Person[] }>(
    "items/persons?fields=name, title, image, role",
  );
  const staff = result.data.filter((person) => person.title === "1");

  return (
    <div className="mt-48">
      <PageHeader>Nasz zespół</PageHeader>
      <PaddingWrapper className="mt-8">
        <PersonCardList people={staff} />
      </PaddingWrapper>
    </div>
  );
}
