import { HomePageBlock } from "components";
import { HomePageBlockContainerWrapper } from 'modules/moduleStyles';
import { ReactElement } from "react";
import { HomePageBlockContainerProps } from 'utils/interfaces'

const Blocks = ({ navLinksAndStyles }: HomePageBlockContainerProps): ReactElement => (
    <HomePageBlockContainerWrapper>
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
        </div>
    </HomePageBlockContainerWrapper>);

const HomePageBlockContainer = ({ navLinksAndStyles }: HomePageBlockContainerProps) => {
    return (

        <Blocks navLinksAndStyles={navLinksAndStyles} />

    );
};

export default HomePageBlockContainer;
