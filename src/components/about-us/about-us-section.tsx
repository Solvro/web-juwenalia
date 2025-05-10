import type { ReactNode } from "react";

import { HorizontalRule } from "@/components/horizontal-rule";
import { PaddingWrapper } from "@/components/padding-wrapper";
import { fetchData } from "@/lib/api";
import type { Organisation } from "@/lib/types";

import { HomepageHeader } from "../homepage-header";
import { OrganisationDisplay } from "./organisation-display";
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
  const forOrganisers = responseOrganisations.data.filter(
    (organisation) => organisation.role === "1",
  );
  const forMainPartners = responseOrganisations.data.filter(
    (organisation) => organisation.role === "2",
  );
  const forMediaPartners = responseOrganisations.data.filter(
    (organisation) => organisation.role === "3",
  );
  const forSponsors = responseOrganisations.data.filter(
    (organisation) => organisation.role === "4",
  );

  return (
    <div className="mt-24 flex flex-col gap-24 md:mt-32 md:gap-32 lg:mt-48 lg:gap-64">
      <AboutUsSection header="Patroni">
        <PartnersList
          mainPartners={forMainPartners}
          mediaPartners={forMediaPartners}
        />
      </AboutUsSection>

      <AboutUsSection header="Organizatorzy">
        <OrganisationDisplay organisations={forOrganisers} />
      </AboutUsSection>

      <AboutUsSection header="Sponsorzy">
        <OrganisationDisplay organisations={forSponsors} />
      </AboutUsSection>
    </div>
  );
}
