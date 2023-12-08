import { PageHeader } from 'modules';
import getCopy from 'utils/getCopy';
import { ContainerWrapper } from "./containerStyles";
import { YoutubePlayer } from 'atoms';

const Videos = (): JSX.Element => {
    const VIDEOS_COPY = getCopy({ copyKey: 'VIDEOS_COPY', copyPath: 'containers/videos' });

    return (
        <ContainerWrapper>
            <div className="page-wrapper">
                <div className="inner-content">
                    <PageHeader pageTitle={VIDEOS_COPY.pageTitle} />
                    <YoutubePlayer />
                </div>
            </div>
        </ContainerWrapper>
    );
};

export default Videos;
