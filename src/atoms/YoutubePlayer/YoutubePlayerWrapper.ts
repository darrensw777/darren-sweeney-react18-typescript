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
            @media (min-width: 769px) {
                flex-basis: 50%;
                margin-bottom: 1%;
            }
            flex-basis: 100%;
            @extend %margin-bottom;
            iframe {
                border-radius: $border-radius;
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
