import { ReactNode, useState } from "react";

interface SoundCloudPlayerProps {soundcloudIds:number[]}

const SoundCloudMusic = ({soundcloudIds}:SoundCloudPlayerProps) => {
    // prettier-ignore
    const [iframes, setIframes] = useState<ReactNode[]>([]);

    if(iframes.length === 0) {
        const derivedIframes = soundcloudIds.map((id) => (
                <iframe
                    key={id}
                    title="music"
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    className="player"
                    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true&show_teaser=false`}
                ></iframe>
            ));
            setIframes(derivedIframes);
    }
    return <>{iframes}</>;
};

const SoundCloudPlayer = ({soundcloudIds}:SoundCloudPlayerProps) => {
    return (
        <div className="inner-content soundcloud-player">
            <SoundCloudMusic soundcloudIds={soundcloudIds} />
        </div>
    );
};

export default SoundCloudPlayer;
