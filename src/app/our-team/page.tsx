import { AboutUsSection } from "@/components/about-us/about-us-section";
import { PersonCardList } from "@/components/about-us/person-card-list";
import { fetchData } from "@/lib/api";
import type { Person } from "@/lib/types";

export default async function AboutUsPage() {
  const result = await fetchData<{ data: Person[] }>(
    "items/persons?fields=name, title, image, role",
  );
  const staff = result.data.filter((person) => person.title === "1");

  return (
    <div className="mt-24 flex flex-col gap-24 md:mt-32 md:gap-32 lg:mt-48 lg:gap-64">
      <AboutUsSection header="Nasz Zespół">
        <PersonCardList people={staff} />
      </AboutUsSection>
    </div>
  );
}
