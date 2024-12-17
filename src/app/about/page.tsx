import { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { HorizontalRule } from "@/components/ui/horizontal-rule";

import { CreatorsList } from "./creators";
import { OrganisersList } from "./organisers";
import { PartnersList } from "./partners";

function Section({
  children,
  className,
  header,
  body,
}: {
  children: ReactNode;
  className?: string;
  header: string;
  body?: string;
}) {
  return (
    <>
      <h1 className={`text-2xl font-extrabold ${className ?? ""}`}>{header}</h1>
      {body != null && <p className="text-xl">{body}</p>}
      <HorizontalRule />
      <div className={`mb-20 mt-6 flex flex-col gap-5 ${className ?? ""}`}>
        {children}
      </div>
    </>
  );
}

export default function AboutPage() {
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
      <Section
        header="Twórcy aplikacji"
        body="Lorem ipsum dolor sit amet consectetur. Lectus purus faucibus senectus hendrerit nullam consequat amet convallis sagittis. Quisque mauris magnis augue scelerisque facilisi accumsan."
      >
        <CreatorsList />
      </Section>
    </div>
  );
}
