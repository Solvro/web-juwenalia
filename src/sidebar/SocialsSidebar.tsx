// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const SocialSidebar = () => {
//   const fb_url = "";
//   const ig_url = "";
//   const tt_url = "";

//   return (
//     <div className={`fixed right-0 top-1/3 z-50 p-2 flex -translate-y-1/2 flex-col w-12 gap-4 rounded-l-2xl bg-black opacity-80`}>
//       {/* Facebook Icon */}
//        <Link
//          href={fb_url}
//          target="_black"
//          rel="noopener noreferrer"
//          role="button"
//        >
//          <Image
//            className={
//             "rounded-xl p-1 hover:bg-gray-600 active:bg-gray-400"
//            }
//            src={`/social-icons/fb-white.svg`}

//            alt="Link do Facebooka organizatorów."
//            width="32"
//            height="32"
//          />
//        </Link>

//       {/* Instagram Icon */}

//       <Link
//         href={ig_url}
//         target="_black"
//         rel="noopener noreferrer"
//         role="button"
//       >
//         <Image
//           className={
//             "rounded-xl p-1 hover:bg-gray-600 active:bg-gray-400"
//           }
//           src={`/social-icons/ig-white.svg`}

//           alt="Link do Instagrama organizatorów."
//           width="32"
//           height="32"
//         />
//       </Link>

//       {/* TikTok Icon */}
//       <Link
//         href={tt_url}
//         target="_black"
//         rel="noopener noreferrer"
//         role="button"
//       >
//         <Image
//           className={
//             "rounded-xl p-1 hover:bg-gray-600 active:bg-gray-400"
//           }
//           src={`/social-icons/tt-white.svg`}

//           alt="Link do TikToka organizatorów."
//           width="32"
//           height="32"
//         />
//       </Link>
//     </div>
//   );
// };

// export default SocialSidebar;

import Link from "next/link";
import Image from "next/image";
import AnimatedSidebar from "./AnimatedSidebar";

const SocialSidebar = () => {
  // dejta linki do sociali
  const fb_url = "https://www.youtube.com/watch?v=NBNaArsb99Y";
  const ig_url = "https://www.youtube.com/watch?v=GJDNkVDGM_s";
  const tt_url = "https://www.youtube.com/watch?v=9bZkp7q19f0";

  return (
    <AnimatedSidebar>
      <div className="fixed right-0 top-1/3 z-50 flex w-12 -translate-y-1/2 flex-col gap-4 rounded-l-2xl bg-black p-2">
        {/* Facebook */}
        <Link
          href={fb_url}
          target="_blank"
          rel="noopener noreferrer"
          role="button"
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
        >
          <Image
            className="rounded-xl p-1 hover:bg-gray-700 active:bg-gray-500"
            src="/social-icons/tt-white.svg"
            alt="TikTok"
            width={32}
            height={32}
          />
        </Link>
      </div>
    </AnimatedSidebar>
  );
};

export default SocialSidebar;
