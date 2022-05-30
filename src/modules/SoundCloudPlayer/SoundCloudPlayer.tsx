import { ReactNode, useState } from "react";
const soundcloudIds = [
    1252449361, 246065520, 1252463959, 125995697, 194736534, 125991618, 125986629, 1252459903, 123501678, 111229116,
    108824073,
];

const SoundCloudMusic = () => {
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
                    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true&show_teaser=false`}
                ></iframe>
            ));
            setIframes(derivedIframes);
    }
    return <>{iframes}</>;
};

const SoundCloudPlayer = () => {
    return (
        <div className="inner-content soundcloud-player">
            <SoundCloudMusic />
        </div>
    );
};

export default SoundCloudPlayer;
