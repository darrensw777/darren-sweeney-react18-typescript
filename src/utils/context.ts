import { createContext } from "react";

interface I18nInterface {
    key: string;
    default: {
        language: string,
        locale: string,
    };
}

interface DefaultKeyInterface {
    language: string;
    locale: string;
}

export const i18n: I18nInterface = {
    key: "i18n",
    default: {
        language: "en",
        locale: "en-GB",
    },
};

export const I18nContext = createContext(i18n);
