import { ReactElement } from 'react';
import { Header, Footer } from 'modules';
import { SideBarMenu } from 'components';
import navLinksAndStyles from 'utils/navLinksAndStyles';
import { ChildrenProps } from 'utils/interfaces';
import './Layout.scss';

const Layout = ({ children }: ChildrenProps): ReactElement => {
    return (
        /* This ID is required for the side menu */
        <div id='outerContainer'>
            <SideBarMenu navLinksAndStyles={navLinksAndStyles} />
            <main className='main-content-container' id='pageWrap'>
                <Header />
                {children}
                <Footer />
            </main>
        </div>
    );
};

export default Layout;
