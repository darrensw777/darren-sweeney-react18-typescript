import { PageHeader, AboutMeBlock } from "modules";
import getCopy from "utils/getCopy";
import { ContainerWrapper } from "./containerStyles";

const About = (): JSX.Element => {
    const ABOUT_COPY = getCopy({ copyKey: "ABOUT_COPY", copyPath: "containers/about" });

    return (
        <ContainerWrapper>
            <div className="page-wrapper">
                <div className="inner-content">
                    <PageHeader pageTitle={ABOUT_COPY.pageTitle} />
                    <AboutMeBlock copy={ABOUT_COPY.aboutMe} />
                </div>
            </div>
        </ContainerWrapper>
    );
};

export default About;
