import styled from 'styled-components/macro';

const LoadingSpinnerWrapper = styled.div`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 0;
        .spinner-container {
            position: relative;
            width: 100px;
            height: 100px;
        }

        .spinner,
        .inner-spinner {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 3px solid grey;
            border-bottom: none;
            border-top: none;
            position: absolute;
            top: 25%;
            left: 25%;
            transform: translate(-50%, -50%);
        }

        .spinner {
            animation: spin 1s linear infinite;
        }

        .inner-spinner {
            transform: scale(2);
            animation: spin-inner 0.8s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg) scale(1);
            }
        }

        @keyframes spin-inner {
            0% {
                transform: rotate(360deg) scale(0.5);
            }
            100% {
                transform: rotate(0deg) scale(0.5);
            }
        }
`;

export default LoadingSpinnerWrapper;