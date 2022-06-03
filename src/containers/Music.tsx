import { PageHeader } from 'modules';
import getCopy from 'utils/getCopy';
import { SoundCloudPlayer } from 'modules';
import soundcloudIds from 'utils/soundCloudIds';

const Music = () => {
    const MUSIC_COPY = getCopy({ copyKey: 'MUSIC_COPY', copyPath: 'containers/music' });

    return (
        <div className="page-wrapper">
            <div className="inner-content">
                <PageHeader pageTitle={MUSIC_COPY.pageTitle} />
                <SoundCloudPlayer soundcloudIds={soundcloudIds} />
            </div>
        </div>
    );
};

export default Music;
