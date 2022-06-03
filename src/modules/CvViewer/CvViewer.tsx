import { useState, useReducer, useContext } from 'react';
import { Link } from 'react-router-dom';
import { I18nContext } from 'utils/context';

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
    const [numPages] = useState(cvPages.length);
    const [state, dispatch] = useReducer(counterReducer, initialState);

    const i18nDerived = useContext(I18nContext);
    const { language } = i18nDerived;
    const { CV_VIEWER } = require(`constants/${language}/modules/CV_VIEWER.js`);

    const { DOWNLOAD, CONTACT, PAGE, OF, NEXT, PREVIOUS } = CV_VIEWER;

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    const smoothScrollToTop = () => {
        setTimeout(
            () =>
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                }),
            200
        );
    };

    const previousPage = () => {
        handleDecrement();
        smoothScrollToTop();
    };

    const nextPage = () => {
        handleIncrement();
        smoothScrollToTop();
    };

    const stopPrev = state.pageNumber <= 1;
    const stopNext = state.pageNumber >= numPages;

    return (
        <div className="cv-viewer">
            <div className="links">
                <a href="/pdf/DarrenSweeney4.0.pdf" className="download-pdf" target="_blank">
                    {DOWNLOAD}
                </a>
                <Link to="/contact">{CONTACT}</Link>
            </div>
            <div className="cv-page-container">
                <img src={`/img/cv/ds${state.pageNumber}.webp`} alt={`CV page number ${state.pageNumber + 1}`} />
            </div>

            <div className="pagination">
                <p data-testid="pageNumberCopy">
                    {PAGE} {state.pageNumber || (numPages ? 1 : '--')} {OF} {numPages || '--'}
                </p>
                <div className="buttons">
                    <button
                        type="button"
                        disabled={stopPrev}
                        onClick={previousPage}
                        className="btn"
                        data-testid="previousPage"
                    >
                        {PREVIOUS}
                    </button>
                    <button type="button" disabled={stopNext} onClick={nextPage} className="btn" data-testid="nextPage">
                        {NEXT}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CvViewer;
