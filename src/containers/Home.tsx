import { PageHeader, HomePageBlockContainer } from "modules";
import getCopy from "utils/getCopy";
import navLinksAndStyles from "utils/navLinksAndStyles";
import { ContainerWrapper } from "./containerStyles";

const Home = (): JSX.Element => {
    const HOME_COPY = getCopy({ copyKey: "HOME_COPY", copyPath: "containers/home" });

    return (
        <ContainerWrapper>
            <div className="page-wrapper">
                <div className="inner-content">
                    <PageHeader pageTitle={HOME_COPY.pageTitle} />
                    <HomePageBlockContainer navLinksAndStyles={navLinksAndStyles} />
                </div>
            </div>
        </ContainerWrapper>
    );
};

export default Home;
