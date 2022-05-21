import { useContext } from "react";
import { PageHeader, AboutMeBlock } from "modules";
import { I18nContext } from "utils/context";

const About = () => {
    const i18nDerived = useContext(I18nContext);
    const { language } = i18nDerived?.default;
    const { ABOUT_COPY } = require(`constants/${language}/containers/about.js`);
    console.log("🚀 ~ file: About.tsx ~ line 9 ~ About ~ ABOUT_COPY", ABOUT_COPY);

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
