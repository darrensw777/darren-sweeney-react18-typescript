import {useContext} from 'react';
import { PageHeader } from 'modules';
import { I18nContext } from "utils/context";
import { SoundCloudPlayer } from 'modules';

const Music = () => {
    const i18nDerived = useContext(I18nContext);
    const { language } = i18nDerived;
    const { MUSIC_COPY } = require(`constants/${language}/containers/music.js`);

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
