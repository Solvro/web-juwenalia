import type { ReactNode } from "react";

import { HorizontalRule } from "@/components/horizontal-rule";
import { PaddingWrapper } from "@/components/padding-wrapper";
import { fetchData } from "@/lib/api";
import type { Organisation, Person } from "@/lib/types";

import { HomepageHeader } from "../homepage-header";
import { OrganisersList } from "./organisers";
import { PartnersList } from "./partners";

function Section({
  children,
  header,
  body,
}: {
  children: ReactNode;
  header: string;
  body?: string;
}) {
  return (
    <div className="w-full">
      <div className="w-full">
        <HomepageHeader>{header}</HomepageHeader>
        {body != null && body.length > 0 && (
          <PaddingWrapper className="mt-6 md:pb-6">
            <p className="max-w-[450px] text-base md:max-w-[60%] md:text-xl lg:text-2xl">
              {body}
            </p>
          </PaddingWrapper>
        )}

        <HorizontalRule />
      </div>

      <PaddingWrapper className="mt-12 flex flex-col gap-7">
        {children}
      </PaddingWrapper>
    </div>
  );
}

export async function AboutUs() {
  const [responsePersons, responseOrganisations] = await Promise.all([
    fetchData<{ data: Person[] }>(
      "items/persons?fields=name, title, image, role",
    ),
    fetchData<{ data: Organisation[] }>(
      "items/organisations?fields=name, url, logo, logoScale, role",
    ),
  ]);
  const forStaff = responsePersons.data.filter(
    (person) => person.title === "1",
  );
  const forCoordinators = responsePersons.data.filter(
    (person) => person.title === "2",
  );
  const forOrganisers = responseOrganisations.data.filter(
    (organisation) => organisation.role === "1",
  );
  const forMainPartners = responseOrganisations.data.filter(
    (organisation) => organisation.role === "2",
  );
  const forMediaPartners = responseOrganisations.data.filter(
    (organisation) => organisation.role === "3",
  );

  return (
    <div className="mt-24 flex flex-col gap-24 md:mt-32 md:gap-32 lg:mt-48 lg:gap-64">
      <Section header="Partnerzy">
        <PartnersList
          mainPartners={forMainPartners}
          mediaPartners={forMediaPartners}
        />
      </Section>

      <Section header="Organizatorzy">
        <OrganisersList
          organisers={forOrganisers}
          coordinators={forCoordinators}
          staff={forStaff}
        />
      </Section>
    </div>
  );
}
