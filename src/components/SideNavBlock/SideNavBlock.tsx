import { Link } from 'react-router-dom';

interface Props {
    link: string; 
    iconClass: string; 
    title: string; 
    backgroundColor: string; 
    onClick: any;
}

const SideNavBlock = ({ link, iconClass, title, backgroundColor, onClick }: Props) => {
    const bgColor = `linear-gradient(to bottom, #f1f1f1 50%, ${backgroundColor} 50%)`;

    return (
        <div
            className="side-nav-block"
            style={{
                background: bgColor,
            }}
        >
            <Link to={link} className="link" onClick={onClick}>
                <div>
                    {/* <div className="card-image">
                        <img
                            src={homeImagePath}
                            className="img-responsive"
                            alt=""
                        />
                    </div> */}
                    <div className="icon">
                        <i className={iconClass} aria-hidden="true" />
                    </div>
                    <div className="link">{title}</div>
                </div>
            </Link>
        </div>
    );
};

export default SideNavBlock;
