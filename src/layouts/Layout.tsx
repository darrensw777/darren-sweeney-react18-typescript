import { ReactNode, ReactElement } from "react";
import { Header, Footer } from "modules";
import { SideBarMenu } from "components";
import "./Layout.scss";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props): ReactElement => {
    return (
        /* This ID is required for the side menu */
        <div id="outerContainer">
            <SideBarMenu />
            <main className="main-content-container" id="pageWrap">
                <Header />
                {children}
                <Footer />
            </main>
        </div>
    );
};

export default Layout;
