import { PageHeader } from "modules";
import { ContactFormik } from "modules";
import getCopy from "utils/getCopy";
import { ContainerWrapper } from "./containerStyles";


const Contact = (): JSX.Element => {
    const CONTACT_COPY = getCopy({ copyKey: "CONTACT_COPY", copyPath: "containers/contact" });

    return (
        <ContainerWrapper>
            <div className="page-wrapper">
                <div className="inner-content">
                    <PageHeader pageTitle={CONTACT_COPY.pageTitle} />
                    <ContactFormik CONTACT_COPY={CONTACT_COPY} />
                </div>
            </div>
        </ContainerWrapper>
    );
};

export default Contact;
