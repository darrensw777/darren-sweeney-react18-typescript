import { ReactNode, useState } from "react";
import { SoundCloudPlayerWrapper } from 'modules/moduleStyles'

interface SoundCloudPlayerProps { soundcloudIds: number[] }

const SoundCloudMusic = ({ soundcloudIds }: SoundCloudPlayerProps) => {
    // prettier-ignore
    const [iframes, setIframes] = useState<ReactNode[]>([]);

    let isMobile: boolean | null = null;

    if (typeof window !== "undefined") {
        isMobile = window.innerWidth < 540;
    }


    if (iframes.length === 0) {
        const derivedIframes = soundcloudIds.map((id) => (
            <>
                {isMobile ? <iframe
                    width="100%"
                    height="300"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true`}>
                </iframe> :
                    <iframe
                        key={id}
                        title="music"
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        className="player"
                        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true&show_teaser=false`}
                    ></iframe>}

            </>
        ));
        setIframes(derivedIframes);
    }
    return <>{iframes}</>;
};

const SoundCloudPlayer = ({ soundcloudIds }: SoundCloudPlayerProps) => {
    return (
        <SoundCloudPlayerWrapper>
            <div className="inner-content soundcloud-player">
                <SoundCloudMusic soundcloudIds={soundcloudIds} />
            </div>
        </SoundCloudPlayerWrapper>
    );
};

export default SoundCloudPlayer;
