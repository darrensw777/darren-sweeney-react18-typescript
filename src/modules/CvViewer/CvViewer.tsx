import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { CvPagination } from 'components';
import getCopy from "utils/getCopy";

const cvPages = ['dsCV1.webp', 'dsCV2.webp', 'dsCV3.webp', 'dsCV4.webp'];

const initialState = { pageNumber: 1 };

interface State {
    pageNumber: number;
}

interface Action {
    type: string;
}

const counterReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { pageNumber: state.pageNumber + 1 };
        case 'DECREMENT':
            return { pageNumber: state.pageNumber - 1 };
        default:
            throw new Error();
    }
};

const CvViewer = () => {
    const [pageState, setPageState] = useState({ pageNumber: 1 })
    const CV_VIEWER = getCopy({ copyKey: "CV_VIEWER", copyPath: "modules/CV_VIEWER.js" });

    const { DOWNLOAD, CONTACT } = CV_VIEWER;

    return (
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
    );
};

export default CvViewer;
