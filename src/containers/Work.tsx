import { PageHeader } from "modules";
import getCopy from "utils/getCopy";
import { CvViewer } from "modules";
import { ContainerWrapper } from "./containerStyles";

const Work = (): JSX.Element => {
    const WORK_COPY = getCopy({ copyKey: "WORK_COPY", copyPath: "containers/work" });

    return (
        <ContainerWrapper>
            <div className="page-wrapper">
                <div className="inner-content">
                    <PageHeader pageTitle={WORK_COPY.pageTitle} />
                    <CvViewer />
                </div>
            </div>
        </ContainerWrapper>
    );
};

export default Work;
