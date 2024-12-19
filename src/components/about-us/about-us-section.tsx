import type { ReactNode } from "react";

import { HorizontalRule } from "@/components/horizontal-rule";

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
    <>
      <div>
        <HomepageHeader>{header}</HomepageHeader>
        {body != null && body.length > 0 && (
          <p className="text-xl lg:text-2xl xl:text-3xl">{body}</p>
        )}
        <HorizontalRule />
      </div>
      <div className="mb-20 mt-6 flex flex-col gap-5">{children}</div>
    </>
  );
}

export function AboutUs() {
  return (
    <div className="mt-10 flex flex-col gap-5 px-6 sm:px-10 md:px-12 lg:px-20">
      <Section header="Partnerzy">
        <PartnersList />
      </Section>
      <Section
        header="Organizatorzy"
        body="Lorem ipsum dolor sit amet consectetur. Lectus purus faucibus senectus
          hendrerit nullam consequat amet convallis sagittis. Quisque mauris
          magnis augue scelerisque facilisi accumsan."
      >
        <OrganisersList />
      </Section>
    </div>
  );
}
