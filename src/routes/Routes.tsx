/* istanbul ignore file */
import { Suspense, lazy, useLayoutEffect, ReactNode, ReactElement } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from 'layouts';
import Helmet from 'react-helmet';
import meta from 'utils/seo';
import { companyInfo } from 'utils/config';
import { I18nProvider } from 'contexts/I18nProvider';

const Home = lazy(() => import('containers/Home'));
const About = lazy(() => import('containers/About'));
const Work = lazy(() => import('containers/Work'));
const Music = lazy(() => import('containers/Music'));
const Contact = lazy(() => import('containers/Contact'));
const Gallery = lazy(() => import('containers/Gallery'));
const Videos = lazy(() => import('containers/Videos'));

const ScrollToTop = ({ children }: { children: ReactNode }): ReactElement => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return <>{children}</>;
};

interface Props {
    Component: React.ComponentType<any>;
    Layout: React.ComponentType<any>;
    props?: object;
    page: string;
}

const RenderWithLayout = ({ Component, Layout, props, page = '' }: Props) => {
    const { siteUrl, docTitlePrefix } = companyInfo;
    const pageMeta = meta[page];

    const { docTitle, description, canonical } = pageMeta;
    const currentUrl = window.location.href;

    const pageTitle = `${docTitlePrefix}${docTitle}`;
    const pageUrl = `${siteUrl}${canonical}`;

    return (
        <Layout>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:image" content={`${currentUrl}img/heros/hp-hero.jpg`} />
                <meta property="og:description" content={description} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:url" content={pageUrl} />
            </Helmet>
            <ScrollToTop>
                <Component {...props} />
            </ScrollToTop>
        </Layout>
    );
};

const AllRoutes = () => {
    return (
        <Suspense>
            <I18nProvider>
                <Routes>
                    <Route path="/" element={<RenderWithLayout Component={Home} Layout={Layout} page="home" />} />
                    <Route
                        path="/about"
                        element={<RenderWithLayout Component={About} Layout={Layout} page="about" />}
                    />
                    <Route path="/work" element={<RenderWithLayout Component={Work} Layout={Layout} page="work" />} />
                    <Route
                        path="/music"
                        element={<RenderWithLayout Component={Music} Layout={Layout} page="music" />}
                    />
                    <Route
                        path="/videos"
                        element={<RenderWithLayout Component={Videos} Layout={Layout} page="videos" />}
                    />
                    <Route
                        path="/gallery"
                        element={<RenderWithLayout Component={Gallery} Layout={Layout} page="gallery" />}
                    />
                    <Route
                        path="/contact"
                        element={<RenderWithLayout Component={Contact} Layout={Layout} page="contact" />}
                    />
                </Routes>
            </I18nProvider>
        </Suspense>
    );
};

export default AllRoutes;
