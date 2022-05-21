import { useContext } from "react";
import { PageHeader, AboutMeBlock } from "modules";
import { I18nContext } from "utils/context";

const About = () => {
    const i18nDerived = useContext(I18nContext);
    const { language } = i18nDerived;
    const { ABOUT_COPY } = require(`constants/${language}/containers/about.js`);

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
