import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  const pathname = usePathname();

  function handleResize() {
    const dimensions = {
      width: document.body.offsetWidth,
      height: document.body.offsetHeight,
    };
    setWindowDimensions(dimensions);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();
  }, [pathname]);

  return windowDimensions;
}
