import { PageHeader } from "modules";
import { useI18n } from "contexts/I18n";
import { CvViewer } from "modules";

const Work = () => {
    const { i18n } = useI18n();
    const { language } = i18n;
    const { WORK_COPY } = require(`constants/${language}/containers/work`);

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
