import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CvPagination } from 'components';
import getCopy from "utils/getCopy";
import { CvViewerWrapper } from 'modules/moduleStyles'

const cvPages = ['dsCV1.webp', 'dsCV2.webp', 'dsCV3.webp', 'dsCV4.webp'];

const CvViewer = () => {
    const [pageState, setPageState] = useState({ pageNumber: 1 })
    const CV_VIEWER = getCopy({ copyKey: "CV_VIEWER", copyPath: "modules/CV_VIEWER.js" });

    const { DOWNLOAD, CONTACT } = CV_VIEWER;

    return (
        <CvViewerWrapper>
            <div className="cv-viewer">
                <div className="links">
                    <a href="/pdf/DarrenSweeney5.0.pdf" className="download-pdf" target="_blank">
                        {DOWNLOAD}
                    </a>
                    <Link to="/contact">{CONTACT}</Link>
                </div>
                <div className="cv-page-container">
                    <img src={`/img/cv/ds${pageState.pageNumber}.webp`} alt={`CV page number ${pageState.pageNumber + 1}`} />
                </div>
                <CvPagination cvPages={cvPages} CV_VIEWER={CV_VIEWER} setPageState={setPageState} pageState={pageState} />
            </div>
        </CvViewerWrapper>
    );
};

export default CvViewer;
