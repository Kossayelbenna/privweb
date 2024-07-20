import { LocaleProvider } from "@/lib/use-translator";
import { Locale } from "locale";
import React from "react";

function layout({
  params: { locale },
  children,
}: {
  params: { locale: Locale };
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider locale={locale}>
      {children}
      {/* <div className="w-full max-w-[1200px] mx-auto px-5 md:px-2 lg:px-0">
      </div> */}
    </LocaleProvider>
  );
}

export default layout;
