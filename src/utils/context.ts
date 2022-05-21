import { createContext } from "react";

interface I18nInterface {
    language: string;
    locale: string;
    setLanguage: Function;
}

export const i18n: I18nInterface = {
    language: "en",
    locale: "en-GB",
    setLanguage: () => {},
};

export const I18nContext = createContext(i18n);
