import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FOOTER_LINKS } from "@/config/data";

import { AnimatedSidebar } from "./sidebar-animations";

export function SocialSidebar() {
  const fb_url = FOOTER_LINKS.socials.fb;
  const ig_url = FOOTER_LINKS.socials.ig;
  const tt_url = FOOTER_LINKS.socials.tt;

  return (
    <AnimatedSidebar>
      <div className="fixed right-0 z-50 flex w-12 -translate-y-1/2 flex-col rounded-l-2xl border-b border-l border-t border-[#ababab] border-opacity-50 bg-black">
        {/* Facebook */}
        <Link
          href={fb_url}
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          className="group flex items-center justify-center rounded-tl-2xl p-2 hover:bg-gray-700 active:bg-gray-500"
        >
          <Image
            className="rounded-xl p-1 hover:bg-gray-700 active:bg-gray-500"
            src="/social-icons/fb-white.svg"
            alt="Facebook"
            width={32}
            height={32}
          />
        </Link>

        {/* Instagram */}
        <Link
          href={ig_url}
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          className="group flex items-center justify-center border-t border-[#ababab] border-opacity-50 p-2 hover:bg-gray-700 active:bg-gray-500"
        >
          <Image
            className="rounded-xl p-1 hover:bg-gray-700 active:bg-gray-500"
            src="/social-icons/ig-white.svg"
            alt="Instagram"
            width={32}
            height={32}
          />
        </Link>

        {/* TikTok */}
        <Link
          href={tt_url}
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          className="group flex items-center justify-center rounded-bl-2xl border-t border-[#ababab] border-opacity-50 p-2 hover:bg-gray-700 active:bg-gray-500"
        >
          <Image
            className="rounded-xl p-1 hover:bg-gray-700 active:bg-gray-500"
            src="/social-icons/tt-white.svg"
            alt="TikTok"
            width={27}
            height={27}
          />
        </Link>
      </div>
    </AnimatedSidebar>
  );
}
