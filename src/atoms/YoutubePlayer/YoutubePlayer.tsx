import YoutubePlayerWrapper from './YoutubePlayerWrapper'
import { ReactElement } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import youtubeIds from 'utils/youtubeIds';
import { LoadingSpinner } from 'atoms';

const YoutubePlayer = (): ReactElement => {
    const videos = youtubeIds.map(video => {
        const opts: YouTubeProps['opts'] = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0,
            },
        };
        return (
            <div className="video-cell" key={video}>
                <div className="loader">
                    <LoadingSpinner />
                </div>
                <YouTube videoId={video} opts={opts} />
            </div>
        );
    });
    return (
        <YoutubePlayerWrapper>
            <div className="video-container">
                {videos}
            </div>
        </YoutubePlayerWrapper>
    );
};

export default YoutubePlayer;