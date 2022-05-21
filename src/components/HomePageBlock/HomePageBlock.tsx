import { Link } from 'react-router-dom';

interface Props {
    link: string;
    homeImagePath: string;
    iconClass: string;
    title: string;
    backgroundColor: string;
}

const HomePageBlock = ({
    link,
    homeImagePath,
    iconClass,
    title,
    backgroundColor,
}: Props) => {
    const bgColor = `linear-gradient(to bottom, #f1f1f1 50%, ${backgroundColor} 50%)`;

    return (
        <div
            className="homepage-block"
            style={{
                background: bgColor,
            }}
        >
            <Link to={link} className="link">
                <div>
                    <div className="card-image">
                        <img
                            src={homeImagePath}
                            className="img-responsive"
                            alt=""
                        />
                    </div>
                    <div className="link-holder">
                        <i className={iconClass} aria-hidden="true" />
                        {title}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HomePageBlock;
