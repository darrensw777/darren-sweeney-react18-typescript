import { Link } from 'react-router-dom';
import icons from 'utils/faIcons';
import { SideNavBlockWrapper } from 'components/componentStyles'
import { SideNavBlockProps } from 'utils/interfaces';

const SideNavBlock = ({ link, iconClass, title, backgroundColor, onClick }: SideNavBlockProps) => {
    const bgColor = `linear-gradient(to bottom, #f1f1f1 50%, ${backgroundColor} 50%)`;

    return (
        <SideNavBlockWrapper>
            <div
                className="side-nav-block"
                style={{
                    background: bgColor,
                }}
            >
                <Link to={link} className="link" onClick={onClick} role="navigation" aria-label={title}>
                    <div className="icon">
                        {icons[iconClass]}
                    </div>
                    <div className="link">{title}</div>
                </Link>
            </div>
        </SideNavBlockWrapper>
    );
};

export default SideNavBlock;
