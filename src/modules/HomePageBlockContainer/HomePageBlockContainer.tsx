import { HomePageBlock } from "components";
import { HomePageBlockContainerWrapper } from 'modules/moduleStyles';
import { HomePageBlockContainerProps } from 'utils/interfaces'

const Blocks = ({ navLinksAndStyles }: HomePageBlockContainerProps) => (
    <div className="home-group-container">
        {navLinksAndStyles
            .filter((item) => item.navBlock)
            .map((navItem, idx) => {
                const { backgroundColor, link, homeImagePath, iconClass, title } = navItem;
                return (
                    <HomePageBlock
                        key={idx}
                        backgroundColor={backgroundColor}
                        link={link}
                        homeImagePath={homeImagePath}
                        iconClass={iconClass}
                        title={title}
                    />
                );
            })}
    </div>);

const HomePageBlockContainer = ({ navLinksAndStyles }: HomePageBlockContainerProps) => {
    return (
        <HomePageBlockContainerWrapper>
            <Blocks navLinksAndStyles={navLinksAndStyles} />
        </HomePageBlockContainerWrapper>
    );
};

export default HomePageBlockContainer;
