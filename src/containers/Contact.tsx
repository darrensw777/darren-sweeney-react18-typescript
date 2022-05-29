import { PageHeader } from "modules";
import { ContactFormik } from "modules";
import { useI18n } from "contexts/I18n";

const Contact = () => {
    const { i18n } = useI18n();
    const { language } = i18n;
    const { CONTACT_COPY } = require(`constants/${language}/containers/contact`);

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
