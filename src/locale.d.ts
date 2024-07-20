declare module "locale" {
  export type Locale = "en" | "fr";
  export type Content = {
    [key: string]: string | Content | ((args: any) => string) | any[];
  };
  export type Translation = {
    [locale in Locale]: Content;
  };
}
