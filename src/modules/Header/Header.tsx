import { useContext } from "react";
import { Link } from "react-router-dom";
import { GetCurrentPage } from "utils/commonUtils";
import { I18nContext } from "utils/context";

interface HeaderLinks {
    active: boolean;
    headerNav: boolean;
    label: string;
    linkTo: string;
    sideNav: boolean;
    sideNavFullLine: boolean;
}

interface HeaderLinksProps {
    headerLinks: HeaderLinks[];
}

const Links = ({ headerLinks }: HeaderLinksProps) => {
    const currentPage = GetCurrentPage();
    return (
        <>
            {headerLinks
                .filter((link) => link.active)
                .filter((link) => link.headerNav)
                .map((link) => {
                    const isActive = currentPage === link.linkTo;
                    return (
                        <li key={link.linkTo}>
                            <Link to={link.linkTo} className="my-auto" aria-current={isActive}>
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
        </>
    );
};

const Header = () => {
    const i18nDerived = useContext(I18nContext);
    const { language } = i18nDerived;

    const { HeaderCopy } = require(`constants/${language}/modules/Header.js`);
    const { headerLinks } = HeaderCopy;

    return (
        <header data-module="header" className="header">
            <div className="header__wrapper">
                <div className="inner-content">
                    <Link to="/" className="name-logo">
                        Darren Sweeney
                    </Link>
                    <ul className="header-nav">
                        <Links headerLinks={headerLinks} />
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
