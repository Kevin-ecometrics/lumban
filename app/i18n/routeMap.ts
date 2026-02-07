export type Lang = "es" | "en";

export type RouteKey =
  | "home"
  | "profile"
  | "certifications"
  | "facilities"
  | "contact"
  | "aesthetic-nose"
  | "septoplasty"
  | "sinusitis"
  | "nasal-congestion"
  | "nasal-obstruction"
  | "allergies"
  | "snoring"
  | "sleep-apnea"
  | "voice-disorders"
  | "pediatric-ent"
  | "endoscopic-surgery"
  | "anti-snoring-surgery"
  | "microscopic-surgery"
  | "vertigo-dizziness"
  | "hearing-loss"
  | "throat-problems"
  | "throat"
  | "ear"
  | "nose";

export const ROUTE_PAIRS: Array<{ key: RouteKey; es: string; en: string }> = [
  { key: "home", es: "/", en: "/" },
  { key: "profile", es: "/perfil", en: "/profile" },
  { key: "certifications", es: "/certificaciones", en: "/certifications" },
  { key: "facilities", es: "/instalaciones", en: "/facilities" },
  { key: "contact", es: "/contacto", en: "/contact" },
  { key: "aesthetic-nose", es: "/cosmetica-nariz", en: "/rhinoplasty" },
  { key: "septoplasty", es: "/septoplastia", en: "/septoplasty" },
  { key: "sinusitis", es: "/sinusitis", en: "/sinusitis" },
  { key: "nasal-congestion", es: "/congestion-nasal", en: "/nasal-congestion" },
  { key: "nasal-obstruction", es: "/obstruccion-nasal", en: "/nasal-obstruction" },
  { key: "allergies", es: "/alergias", en: "/allergies" },
  { key: "snoring", es: "/ronquidos", en: "/snoring" },
  { key: "sleep-apnea", es: "/apnea-sueno", en: "/sleep-apnea" },
  { key: "voice-disorders", es: "/trastornos-voz", en: "/voice-disorders" },
  { key: "throat-problems", es: "/problemas-garganta", en: "/throat-problems" },
  { key: "throat", es: "/garganta", en: "/throat" },
  { key: "pediatric-ent", es: "/otorrinopediatria", en: "/pediatric-ent" },
  { key: "endoscopic-surgery", es: "/cirugia-endoscopica", en: "/endoscopic-surgery" },
  { key: "anti-snoring-surgery", es: "/cirugia-antirronquido", en: "/anti-snoring-surgery" },
  { key: "microscopic-surgery", es: "/cirugia-microscopica", en: "/microscopic-surgery" },
  { key: "vertigo-dizziness", es: "/vertigo-mareo", en: "/vertigo-dizziness" },
  { key: "hearing-loss", es: "/perdida-audicion", en: "/hearing-loss" },
  { key: "ear", es: "/oido", en: "/ear" },
  { key: "nose", es: "/nariz", en: "/nose" },
];

const routeMap = ROUTE_PAIRS.reduce<Record<RouteKey, { es: string; en: string }>>(
  (acc, item) => {
    acc[item.key] = { es: item.es, en: item.en };
    return acc;
  },
  {} as Record<RouteKey, { es: string; en: string }>
);

export const normalizePath = (path: string) => {
  if (!path) return "/";
  if (path === "/") return "/";
  return path.replace(/\/+$/, "");
};

export const getRouteByKey = (key: RouteKey, lang: Lang) => {
  return routeMap[key][lang];
};

export const getLocalizedPath = (pathname: string, lang: Lang) => {
  const normalized = normalizePath(pathname);
  const match = ROUTE_PAIRS.find(
    (pair) =>
      normalizePath(pair.es) === normalized ||
      normalizePath(pair.en) === normalized
  );

  if (!match) {
    return normalized;
  }

  return match[lang];
};

export const getPathLang = (pathname: string): Lang | null => {
  const normalized = normalizePath(pathname);
  const match = ROUTE_PAIRS.find(
    (pair) =>
      normalizePath(pair.es) === normalized ||
      normalizePath(pair.en) === normalized
  );

  if (!match) return null;

  if (normalizePath(match.es) === normalizePath(match.en)) {
    return null;
  }

  if (normalizePath(match.en) === normalized && match.en !== match.es) {
    return "en";
  }

  if (normalizePath(match.es) === normalized) {
    return "es";
  }

  return null;
};

export const getSpanishPathForEnglish = (pathname: string) => {
  const normalized = normalizePath(pathname);
  const match = ROUTE_PAIRS.find(
    (pair) => normalizePath(pair.en) === normalized && pair.en !== pair.es
  );

  return match ? match.es : null;
};
