import { PageHeader } from "modules";
import { HomePageBlock } from "components";
import navLinksAndStyles from "utils/navLinksAndStyles";
import getCopy from "utils/getCopy";

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
    const HOME_COPY = getCopy({ copyKey: "HOME_COPY", copyPath: "containers/home" });

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
