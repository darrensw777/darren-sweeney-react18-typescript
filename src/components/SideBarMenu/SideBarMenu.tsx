import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { SideBarMenuLinks } from 'components';
import { SideBarMenuProps } from 'utils/interfaces';
import { SideBarButtonWrapper } from 'formElements';

const SideBarMenu = ({ navLinksAndStyles }: SideBarMenuProps) => {
    // prettier-ignore
    // Don't actually have to specify here as it's inferred from false
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const containerClasses = classNames('sidebar-menu', menuOpen && 'open');
    const burgerClasses = classNames('btn', 'close-menu-icon', menuOpen && 'open');
    useEffect(() => {
        document.body.classList.toggle('side-menu-open', menuOpen);
    }, [menuOpen]);
    return (
        <div className="sidebar-container">
            <SideBarButtonWrapper
                id="burger-menu"
                burgerClasses={burgerClasses}
                setMenuOpen={setMenuOpen}
                menuOpen={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </SideBarButtonWrapper>
            <div className={containerClasses} id="sideBarMenu">
                <Link to="/" className="name-logo">
                    Darren Sweeney
                </Link>
                <div className="nav-block-container">
                    <SideBarMenuLinks setMenuOpen={setMenuOpen} navLinksAndStyles={navLinksAndStyles} />
                </div>
            </div>
        </div>
    );
};

export default SideBarMenu;
