"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import { getPathLang } from "./i18n/routeMap";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng");
    const preferredLang = storedLang?.startsWith("en") ? "en" : "es";

    if (i18n.language !== preferredLang) {
      i18n.changeLanguage(preferredLang);
    }

    const updateLang = () => {
      const lang = i18n.language?.startsWith("en") ? "en" : "es";
      localStorage.setItem("i18nextLng", lang);
      document.documentElement.lang = lang;
    };

    updateLang();
    i18n.on("languageChanged", updateLang);

    return () => {
      i18n.off("languageChanged", updateLang);
    };
  }, []);

  useEffect(() => {
    if (!pathname) return;

    const routeLang = getPathLang(pathname);
    if (routeLang && !i18n.language?.startsWith(routeLang)) {
      i18n.changeLanguage(routeLang);
    }
  }, [pathname]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
