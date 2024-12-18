export function HomepageHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="-ml-[calc((100vw-100%)/2)] mb-2 w-min rounded-r-full bg-gradient-main px-5 py-2 text-base font-extrabold text-background min-[240px]:w-fit sm:px-7 sm:text-xl md:mb-4 md:px-9 md:text-2xl lg:mb-5 lg:px-10 lg:py-3 lg:text-4xl xl:mb-7 xl:px-12 xl:py-5 xl:text-5xl">
      {children}
    </h2>
  );
}
