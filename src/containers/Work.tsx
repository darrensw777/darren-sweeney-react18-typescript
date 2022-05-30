import { PageHeader } from "modules";
import getCopy from "utils/getCopy";
import { CvViewer } from "modules";

const Work = () => {
    const WORK_COPY = getCopy({ copyKey: "WORK_COPY", copyPath: "containers/work" });

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
