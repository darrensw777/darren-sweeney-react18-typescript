import { Link } from "react-router-dom";
import icons from 'utils/faIcons';
import { HomePageBlockWrapper } from 'components/componentStyles'
import { HomePageBlockP } from 'utils/interfaces'



const HomePageBlock = ({ link, homeImagePath, iconClass, title, backgroundColor }: HomePageBlockP) => {

    const bgColor = `linear-gradient(to bottom, #f1f1f1 50%, ${backgroundColor} 50%)`;

    return (
        <HomePageBlockWrapper>
            <div
                className="homepage-block"
                style={{
                    background: bgColor,
                }}
            >
                <Link to={link} className="link">
                    <>
                        <div className="card-image">
                            <img src={homeImagePath} className="img-responsive" alt="" />
                        </div>
                        <div className="link-holder">
                            {icons[iconClass]}
                            {title}
                        </div>
                    </>
                </Link>
            </div>
        </HomePageBlockWrapper>
    );
};

export default HomePageBlock;
