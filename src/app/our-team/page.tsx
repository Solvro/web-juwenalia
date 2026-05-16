import { TeamList } from "@/components/about-us/team";
import { PaddingWrapper } from "@/components/padding-wrapper";
import { PageHeader } from "@/components/page-header";
import { fetchData } from "@/lib/api";
import { fetchCreators } from "@/lib/creators";
import type { Person } from "@/lib/types";

export default async function AboutUsPage() {
  let staff: Person[] = [];
  let creators: Awaited<ReturnType<typeof fetchCreators>> = [];

  try {
    const [result, fetchedCreators] = await Promise.all([
      fetchData<{ data: Person[] }>(
        "items/persons?fields=name, title, image, role",
      ),
      fetchCreators(),
    ]);

    // Wyświetlamy całą listę osób zamiast tylko tych ze starszą wartością title === "1"
    staff = result.data;
    creators = fetchedCreators;
  } catch (error) {
    console.error("Error fetching team data:", error);
  }

  return (
    <div className="mt-48">
      <PageHeader>Nasz zespół</PageHeader>
      <PaddingWrapper className="mt-8">
        {staff.length > 0 || creators.length > 0 ? (
          <TeamList staff={staff} creators={creators} />
        ) : (
          <p className="text-base md:text-xl">
            Nie udało się pobrać danych zespołu. Spróbuj ponownie później.
          </p>
        )}
      </PaddingWrapper>
    </div>
  );
}
