import { useContext } from "react";
import { PageHeader } from "modules";
import { I18nContext } from "utils/context";
import { CvViewer } from "modules";

const Work = () => {
    const i18nDerived = useContext(I18nContext);
    const { language } = i18nDerived;
    const { WORK_COPY } = require(`constants/${language}/containers/work.js`);

    return (
        <div className="page-wrapper">
            <div className="inner-content">
                <PageHeader pageTitle={WORK_COPY.pageTitle} />
                <CvViewer />
            </div>
        </div>
    );
};

export default Work;
