"use client";

import { translation } from "@/translation";
import { Content, Locale } from "locale";
import { createContext, useContext } from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";

// export function useTranslator(page: string = "index") {
//   const t = useTranslations(page);
//   return t;
// }

const localeContext = createContext<Locale>("fr");

export const LocaleProvider = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) => {
  return (
    <ThirdwebProvider>
      <localeContext.Provider value={locale}>{children}</localeContext.Provider>
    </ThirdwebProvider>
  );
};

type TranslationObject = Content;

function isObject(obj: any): obj is TranslationObject {
  return typeof obj === "object" && obj !== null;
}

function isString(obj: any): obj is string {
  return typeof obj === "string";
}

function isArrayOfStrings(obj: any): obj is string[] {
  return Array.isArray(obj);
}

function createT<T extends TranslationObject>(obj: T) {
  function t<K extends keyof T>(
    key: K
  ): T[K] extends string
    ? string
    : T[K] extends TranslationObject
    ? ReturnType<typeof createT<T[K]>>
    : T[K] {
    const res = obj[key];

    if (isString(res)) return res as any;
    if (isArrayOfStrings(res)) return res as any;
    if (isObject(res)) return createT(res as T[K] & TranslationObject) as any;

    return res as any;
  }
  return t;
}

export function useTranslator(
  page: keyof (typeof translation)[Locale] = "index"
) {
  const locale = useContext(localeContext);
  if (!locale)
    throw new Error("useTranslator must be used within a LocaleProvider");
  return createT(translation[locale][page]);
}

export function useLocale() {
  const locale = useContext(localeContext);
  if (!locale)
    throw new Error("useLocale must be used within a LocaleProvider");
  return locale;
}
