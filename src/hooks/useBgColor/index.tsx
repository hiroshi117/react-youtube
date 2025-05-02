import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const pathname = usePathname();

  console.log(pathname);

  const bgColor = useMemo(() => {
    switch (pathname) {
      case "/": {
        return "lightblue";
      }
      case "/about": {
        return "beige";
      }
      default:
        return "";
    }
    // return pathname === "/" ? "lightblue" : "beige";
  }, [pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
