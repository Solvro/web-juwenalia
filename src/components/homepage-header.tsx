import PaddingWrapper from "@/components/padding-wrapper";

export function HomepageHeader({ children }: { children: React.ReactNode }) {
  return (
    <PaddingWrapper className="w-fit rounded-r-full bg-gradient-main py-2 text-2xl font-extrabold text-background sm:text-xl md:text-3xl lg:py-3 lg:text-4xl xl:py-5">
      <h2>{children}</h2>
    </PaddingWrapper>
  );
}
