import type { ReactNode } from "react";

import { HorizontalRule } from "@/components/horizontal-rule";
import { PaddingWrapper } from "@/components/padding-wrapper";
import { ORGANISATION_ROLES } from "@/config/data";
import { fetchData } from "@/lib/api";
import type { Organisation } from "@/lib/types";

import { HomepageHeader } from "../homepage-header";
import { OrganisationDisplay } from "./organisation-display";
import { OrganisersList } from "./organisers";
import { PartnersList } from "./partners";

export function AboutUsSection({
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
  const responseOrganisations = await fetchData<{ data: Organisation[] }>(
    "items/organisations?fields=name, url, logo, logoScale, role",
  );
  const groups: Record<Organisation["role"], Organisation[]> = {
    [ORGANISATION_ROLES.UNIVERSITY]: [],
    [ORGANISATION_ROLES.STUDENT_ORGANISATION]: [],
    [ORGANISATION_ROLES.MAIN_PARTNER]: [],
    [ORGANISATION_ROLES.MEDIA_PARTNER]: [],
    [ORGANISATION_ROLES.SPONSOR]: [],
  };
  for (const organisation of responseOrganisations.data) {
    groups[organisation.role].push(organisation);
  }

  return (
    <div className="mt-24 flex flex-col gap-24 md:mt-32 md:gap-32 lg:mt-48 lg:gap-64">
      <AboutUsSection header="Patroni">
        <PartnersList
          mainPartners={groups[ORGANISATION_ROLES.MAIN_PARTNER]}
          mediaPartners={groups[ORGANISATION_ROLES.MEDIA_PARTNER]}
        />
      </AboutUsSection>

      <AboutUsSection header="Organizatorzy">
        <OrganisersList
          universities={groups[ORGANISATION_ROLES.UNIVERSITY]}
          studentOrganisations={groups[ORGANISATION_ROLES.STUDENT_ORGANISATION]}
        />
      </AboutUsSection>

      <AboutUsSection header="Sponsorzy">
        <OrganisationDisplay
          organisations={groups[ORGANISATION_ROLES.SPONSOR]}
        />
      </AboutUsSection>
    </div>
  );
}
