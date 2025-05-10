import type { ReactNode } from "react";

import { HorizontalRule } from "./horizontal-rule";
import { PaddingWrapper } from "./padding-wrapper";

export function PageHeader({ children }: { children: ReactNode }) {
  return (
    <>
      <PaddingWrapper>
        <h1
          className={
            "my-8 text-center text-2xl font-extrabold sm:text-left sm:text-5xl"
          }
        >
          {children}
        </h1>
      </PaddingWrapper>
      <HorizontalRule />
    </>
  );
}
