import { useContext } from "react";
import { PageHeader } from "modules";
import { ContactFormik } from "modules";
import { I18nContext } from "utils/context";

const Contact = () => {
    const i18nDerived = useContext(I18nContext);
    const { language } = i18nDerived;
    const {
        CONTACT_COPY,
    } = require(`constants/${language}/containers/contact.js`);

    return (
        <div className="page-wrapper">
            <div className="inner-content">
                <PageHeader pageTitle={CONTACT_COPY.pageTitle} />
                <ContactFormik />
            </div>
        </div>
    );
};

export default Contact;
