import { PageHeader, AboutMeBlock } from "modules";
import getCopy from "utils/getCopy";

const About = () => {
    const ABOUT_COPY = getCopy({ copyKey: "ABOUT_COPY", copyPath: "containers/about" });

    return (
        <div className="page-wrapper">
            <div className="inner-content">
                <PageHeader pageTitle={ABOUT_COPY.pageTitle} />
                <AboutMeBlock copy={ABOUT_COPY.aboutMe} />
            </div>
        </div>
    );
};

export default About;
