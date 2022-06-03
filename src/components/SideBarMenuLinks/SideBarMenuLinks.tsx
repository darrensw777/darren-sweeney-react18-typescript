import { SideNavBlock } from 'components';
import { GetCurrentPage } from 'utils/commonUtils';
import { SideBarMenuLinksProps } from 'utils/interfaces';

const SideBarMenuLinks = ({ setMenuOpen, navLinksAndStyles }: SideBarMenuLinksProps) => {
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
                        aria-label={navItem.title}
                        onClick={() => setMenuOpen(false)}
                    />
                );
            })}
        </>
    );
};

export default SideBarMenuLinks;
