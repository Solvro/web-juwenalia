import { Button } from "@/components/button";
import { PaddingWrapper } from "@/components/padding-wrapper";

export function BuyTicketCta() {
  return (
    <PaddingWrapper className="my-24 grid min-h-[80svh] w-full place-items-center bg-gradient-main py-16 md:my-32 md:min-h-[40svh] md:py-20 lg:my-48 lg:py-24">
      <div className="flex h-full w-full flex-col gap-16 md:gap-16 lg:flex-row lg:justify-between lg:gap-32">
        <h1 className="flex flex-col text-7xl/[4rem] font-black uppercase text-white md:text-8xl/[5rem]">
          <span>Potrze</span>
          <span>bujemy</span>
          <span>cię tam</span>
        </h1>

        <div className="relative my-auto flex w-full flex-col gap-10 md:my-0 lg:mx-auto lg:w-fit">
          <div className="flex max-w-[600px] flex-col gap-1.5 md:gap-2 lg:gap-4">
            <p className="text-white md:text-lg lg:text-xl">
              Kup bilet i baw się razem z nami na tegorocznych Juwenaliach!
            </p>
            <p className="text-white md:text-lg lg:text-xl">
              Ilość biletów w puli ograniczona.
            </p>
          </div>

          <Button
            as={Link}
            href="/"
            variant="secondary"
            variantColor="white"
            className="w-full max-w-[225px]"
          >
            kup bilet
          </Button>
        </div>
      </div>
    </PaddingWrapper>
  );
}
