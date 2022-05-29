import { PageHeader } from "modules";
import { useI18n } from "contexts/I18n";
import { SoundCloudPlayer } from "modules";

const Music = () => {
    const { i18n } = useI18n();
    const { language } = i18n;
    const { MUSIC_COPY } = require(`constants/${language}/containers/music`);

    return (
        <div className="page-wrapper">
            <div className="inner-content">
                <PageHeader pageTitle={MUSIC_COPY.pageTitle} />
                <SoundCloudPlayer />
            </div>
        </div>
    );
};

export default Music;
