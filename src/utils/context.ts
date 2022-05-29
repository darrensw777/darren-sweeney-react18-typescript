import { createContext } from "react";

export interface I18nInterface {
    language: string;
    locale: string;
    setLanguage: Function;
}

export const i18n = {
    language: "en",
    locale: "en-GB",
    setLanguage: () => {},
};
// prettier-ignore
export const I18nContext = createContext<I18nInterface>(i18n);
