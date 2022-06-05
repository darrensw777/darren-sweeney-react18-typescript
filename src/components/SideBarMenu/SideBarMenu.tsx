import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { SideBarMenuLinks } from 'components';
import { SideBarMenuProps } from 'utils/interfaces';
import { SideBarBurgerButton } from 'formElements';
import { SideBarMenuWrapper } from 'components/componentStyles'

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
        <SideBarMenuWrapper>
            <div className="sidebar-container">
                <SideBarBurgerButton
                    id="burger-menu"
                    burgerClasses={burgerClasses}
                    setMenuOpen={setMenuOpen}
                    menuOpen={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </SideBarBurgerButton>
                <div className={containerClasses} id="sideBarMenu">
                    <Link to="/" className="name-logo">
                        Darren Sweeney
                    </Link>
                    <div className="nav-block-container">
                        <SideBarMenuLinks setMenuOpen={setMenuOpen} navLinksAndStyles={navLinksAndStyles} />
                    </div>
                </div>
            </div>
        </SideBarMenuWrapper>
    );
};

export default SideBarMenu;
