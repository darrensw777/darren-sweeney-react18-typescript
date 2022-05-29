import { PageHeader, AboutMeBlock } from "modules";
import { useI18n } from "contexts/I18n";

const About = () => {
    const { i18n } = useI18n();
    const { language } = i18n;
    const { ABOUT_COPY } = require(`constants/${language}/containers/about`);

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
