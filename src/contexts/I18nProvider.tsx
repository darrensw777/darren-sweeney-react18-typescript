/* istanbul ignore file */
import { useState, ReactNode } from 'react';
import { I18nContext, i18nObject } from 'contexts/I18n';

export const I18nProvider = ({ children }: { children: ReactNode }) => {
    // prettier-ignore
    const [i18n, setI18n] = useState(i18nObject);

    return <I18nContext.Provider value={{ i18n, setI18n }}>{children}</I18nContext.Provider>;
};
