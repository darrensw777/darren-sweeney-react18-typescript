import { useState, useReducer, useEffect } from 'react';

interface CvPaginationProps {
    cvPages: string[];
    CV_VIEWER: {
        PAGE: string,
        OF: string,
        NEXT: string,
        PREVIOUS: string
    };
    setPageState: Function;
    pageState: State;
}

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

const CvPagination = ({ cvPages, CV_VIEWER, setPageState, pageState }: CvPaginationProps) => {
    const [numPages] = useState(cvPages.length);
    const [state, dispatch] = useReducer(counterReducer, pageState);

    useEffect(() => {
        setPageState({ pageNumber: state.pageNumber })
    }, [state])

    const { PAGE, OF, NEXT, PREVIOUS } = CV_VIEWER;

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
    );
};

export default CvPagination;
