import React, { useState } from "react";
import { Link } from "react-router-dom";

const cvPages = ["dsCV1.webp", "dsCV2.webp", "dsCV3.webp", "dsCV4.webp"];

const CvViewer = () => {
    const [numPages] = useState(cvPages.length);
    const [pageNumber, setPageNumber] = useState(1);

    const changePage = (offset) => {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    };

    const smoothScrollToTop = () => {
        setTimeout(
            () =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                }),
            200
        );
    };

    const previousPage = () => {
        changePage(-1);
        smoothScrollToTop();
    };

    const nextPage = () => {
        changePage(1);
        smoothScrollToTop();
    };

    return (
        <div className="cv-viewer">
            <div className="links">
                <a href="/pdf/DarrenSweeney4.0.pdf" className="download-pdf" target="_blank">
                    Click here to download a PDF of my CV
                </a>
                <Link push to="/contact">
                    Contact me
                </Link>
            </div>
            <div className="cv-page-container">
                <img src={`/img/cv/ds${pageNumber}.webp`} alt={`CV page number ${pageNumber + 1}`} />
            </div>

            <div className="pagination">
                <p>
                    Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                </p>
                <div className="buttons">
                    <button type="button" disabled={pageNumber <= 1} onClick={previousPage} className="btn">
                        Previous
                    </button>
                    <button type="button" disabled={pageNumber >= numPages} onClick={nextPage} className="btn">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CvViewer;
