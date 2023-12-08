import { ReactElement, ReactNode, useState } from "react";
import { SoundCloudPlayerWrapper } from 'modules/moduleStyles'
import { LoadingSpinner } from "atoms";

interface SoundCloudPlayerProps { soundcloudIds: number[] }

const SoundCloudMusic = ({ soundcloudIds }: SoundCloudPlayerProps): ReactElement => {
    const [iframes, setIframes] = useState<ReactNode[]>([]);

    let isMobile: boolean | null = null;

    if (typeof window !== "undefined") {
        isMobile = window.innerWidth < 540;
    }


    if (iframes.length === 0) {
        const derivedIframes = soundcloudIds.map((id) => (
            <div key={id} style={{ position: 'relative' }}>
                <LoadingSpinner />
                <div style={{ zIndex: '1', position: 'relative' }}>
                    {isMobile ? <iframe
                        width="100%"
                        height="300"
                        z-index='100'
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true`}>
                    </iframe> :
                        <iframe
                            title="music"
                            width="100%"
                            height="166"
                            z-index='100'
                            scrolling="no"
                            frameBorder="no"
                            className="player"
                            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true&show_teaser=false`}
                        ></iframe>}
                </div>

            </div>
        ));
        setIframes(derivedIframes);
    }
    return <>{iframes}</>;
};

const SoundCloudPlayer = ({ soundcloudIds }: SoundCloudPlayerProps): ReactElement => {
    return (
        <SoundCloudPlayerWrapper>
            <div className="inner-content soundcloud-player">
                <SoundCloudMusic soundcloudIds={soundcloudIds} />
            </div>
        </SoundCloudPlayerWrapper>
    );
};

export default SoundCloudPlayer;
