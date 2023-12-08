import LoadingSpinnerWrapper from "./LoadingSpinnerWrapper";

const LoadingSpinner = () => {
    return (
        <LoadingSpinnerWrapper>
            <div className="spinner-container">
                <div className="spinner"></div>
                <div className="inner-spinner"></div>
            </div>
        </LoadingSpinnerWrapper>
    );
};

export default LoadingSpinner;
