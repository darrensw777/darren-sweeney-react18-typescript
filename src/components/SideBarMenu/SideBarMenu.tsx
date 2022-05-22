import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetCurrentPage } from "utils/commonUtils";
import classNames from "classnames";
import { SideNavBlock } from "components";
import navLinksAndStyles from "utils/navLinksAndStyles";

interface Props {
    setMenuOpen(setMenuOpen: boolean): any;
}

const Links = ({ setMenuOpen }: Props) => {
    const currentPage = GetCurrentPage();

    return (
        <>
            {navLinksAndStyles.map((navItem, idx) => {
                const isActive = currentPage === navItem.link;
                return (
                    <SideNavBlock
                        key={idx}
                        backgroundColor={navItem.backgroundColor}
                        link={navItem.link}
                        iconClass={navItem.iconClass}
                        title={navItem.title}
                        aria-current={isActive}
                        onClick={() => setMenuOpen(false)}
                    />
                );
            })}
        </>
    );
};

const SideBarMenu = () => {
    // prettier-ignore
    // Don't actually have to specify here as it's inferred from false
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const containerClasses = classNames("sidebar-menu", menuOpen && "open");
    const burgerClasses = classNames("btn", "close-menu-icon", menuOpen && "open");
    useEffect(() => {
        document.body.classList.toggle("side-menu-open", menuOpen);
    }, [menuOpen]);
    return (
        <div className={"sidebar-container"}>
            <button
                id="burger-menu"
                className={burgerClasses}
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={containerClasses}>
                <Link to="/" className="name-logo">
                    Darren Sweeney
                </Link>
                <div className="nav-block-container">
                    <Links setMenuOpen={setMenuOpen} />
                </div>
            </div>
        </div>
    );
};

export default SideBarMenu;
