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
  const [
    responseOrganisers,
    responseCoordinators,
    responseStaff,
    responseMainPartners,
    responseMediaPartners,
  ] = await Promise.all([
    fetchData<{ data: Organisation[] }>(
      "items/organisers?fields=name, url, logo, logoScale",
    ),
    fetchData<{ data: Person[] }>(
      "items/coordinators?fields=name, role, image",
    ),
    fetchData<{ data: Person[] }>("items/staff?fields=name, role, image"),
    fetchData<{ data: Organisation[] }>(
      "items/mainPartners?fields=name, url, logo, logoScale",
    ),
    fetchData<{ data: Organisation[] }>(
      "items/mediaPartners?fields=name, url, logo, logoScale",
    ),
  ]);
  const organisersData = [
    responseOrganisers.data,
    responseCoordinators.data,
    responseStaff.data,
  ];
  const partnersData = [responseMainPartners.data, responseMediaPartners.data];
  return (
    <div className="mt-24 flex flex-col gap-24 md:mt-32 md:gap-32 lg:mt-48 lg:gap-64">
      <Section header="Partnerzy">
        <PartnersList allPartners={partnersData} />
      </Section>

      <Section
        header="Organizatorzy"
        body="Lorem ipsum dolor sit amet consectetur. Lectus purus faucibus senectus
          hendrerit nullam consequat amet convallis sagittis. Quisque mauris
          magnis augue scelerisque facilisi accumsan."
      >
        <OrganisersList allOrganisers={organisersData} />
      </Section>
    </div>
  );
}
