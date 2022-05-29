import { createContext, useContext } from "react";

export const i18nObject = {
    language: "en",
    locale: "en-GB",
};

type I18nInterface = {
    language: string,
    locale: string,
};

export type I18nType = {
    i18n: I18nInterface,
    setI18n: (I18nInterface: I18nInterface) => void,
};

// prettier-ignore
export const I18nContext = createContext<I18nType>({ i18n:i18nObject, setI18n:i18n => console.warn(i18n, 'no theme provider')});
export const useI18n = () => useContext(I18nContext);
