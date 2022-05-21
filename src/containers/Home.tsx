import { useContext } from "react";
import { PageHeader } from "modules";
import { HomePageBlock } from "components";
import navLinksAndStyles from "utils/navLinksAndStyles";
import { I18nContext } from "utils/context";

const Sections = navLinksAndStyles
    .filter((item) => item.navBlock)
    .map((navItem, idx) => {
        return (
            <HomePageBlock
                key={idx}
                backgroundColor={navItem.backgroundColor}
                link={navItem.link}
                homeImagePath={navItem.homeImagePath}
                iconClass={navItem.iconClass}
                title={navItem.title}
            />
        );
    });

const Home = () => {
    const i18nDerived = useContext(I18nContext);
    const { language } = i18nDerived;
    const { HOME_COPY } = require(`constants/${language}/containers/home.js`);

    return (
        <div className="page-wrapper">
            <div className="inner-content">
                <PageHeader pageTitle={HOME_COPY.pageTitle} />
                <div className="home-group-container">{Sections}</div>
            </div>
        </div>
    );
};

export default Home;
