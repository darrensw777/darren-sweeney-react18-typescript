import styled from 'styled-components/macro';

const YoutubePlayerWrapper = styled.div`
    .video-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .video-cell {
            position: relative;
            margin-bottom: 1%;
            height: 0;
            overflow: hidden;
            @media (max-width: 768px) {
                flex-basis: 100%;
                padding-bottom: 28.25%;
            }
            @media (min-width: 769px) {
                flex-basis: 50%;
                padding-bottom: 28.25%;
            }
            iframe {
                border-radius: 10px;
                z-index: 2;
                width: 98%;
                height: 100%;
                display: block;
                position: absolute;
                margin: 0;
                top: 0;
                left: 0;
            }
        }
    }
`;

export default YoutubePlayerWrapper;
