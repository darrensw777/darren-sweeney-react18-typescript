import { Suspense, lazy, useLayoutEffect, FC } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from 'layouts';
import Helmet from 'react-helmet';
import meta from 'utils/seo';
import { companyInfo } from 'utils/config';

const Home = lazy(() => import('containers/Home'));
const About = lazy(() => import('containers/About'));
const Work = lazy(() => import('containers/Work'));
const Music = lazy(() => import('containers/Music'));
const Contact = lazy(() => import('containers/Contact'));
const Gallery = lazy(() => import('containers/Gallery'));

interface ScrollProps {
    children: any;
}

const ScrollToTop: FC<ScrollProps> = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};

interface Props { Component: any, Layout: any, props?:object, page: string }

const RenderWithLayout: FC<Props> = ({ Component, Layout, props, page = '' }) => {
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
                <meta
                    property="og:image"
                    content={`${currentUrl}img/heros/hp-hero.jpg`}
                />
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
            <Routes>
                <Route
                    path="/"
                    element={
                        <RenderWithLayout
                            Component={Home}
                            Layout={Layout}
                            page="home"
                        />
                    }
                />
                <Route
                    path="/about"
                    element={
                        <RenderWithLayout
                            Component={About}
                            Layout={Layout}
                            page="about"
                        />
                    }
                />
                <Route
                    path="/work"
                    element={
                        <RenderWithLayout
                            Component={Work}
                            Layout={Layout}
                            page="work"
                        />
                    }
                />
                <Route
                    path="/music"
                    element={
                        <RenderWithLayout
                            Component={Music}
                            Layout={Layout}
                            page="music"
                        />
                    }
                />
                <Route
                    path="/gallery"
                    element={
                        <RenderWithLayout
                            Component={Gallery}
                            Layout={Layout}
                            page="gallery"
                        />
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <RenderWithLayout
                            Component={Contact}
                            Layout={Layout}
                            page="contact"
                        />
                    }
                />
            </Routes>
        </Suspense>
    );
};

export default AllRoutes;
