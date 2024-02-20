import { PageHeader } from "modules";
import getCopy from "utils/getCopy";
import { CvViewer } from "modules";
import { ContainerWrapper } from "./containerStyles";
import { Link } from "react-router-dom";

const Work = (): JSX.Element => {
    const WORK_COPY = getCopy({ copyKey: "WORK_COPY", copyPath: "containers/work" });

    const { pageTitle, careerObjective } = WORK_COPY;

    return (
        <ContainerWrapper>
            <div className="page-wrapper">
                <div className="inner-content">
                    <PageHeader pageTitle={pageTitle} />
                    <h3>
                        {careerObjective.title}
                    </h3>
                    {careerObjective.copy.map((para: string, idx: number) => (
                        <p key={idx}>
                            {para}
                        </p>
                    ))}
                    <h4>
                        {careerObjective.achievements.title}
                    </h4>
                    <ul>
                        {careerObjective.achievements.achievements.map(
                            (achievement: string, idx: number) => (
                                <li key={idx}>
                                    {achievement}
                                </li>
                            )
                        )}
                    </ul>
                    <Link to="/cv/Darren_Sweeney_CV_8.0.pdf">
                        Click to download a copy of my CV.
                    </Link>
                </div>
            </div>
        </ContainerWrapper>
    );
};

export default Work;
