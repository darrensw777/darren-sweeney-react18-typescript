import { aboutGreeting } from "utils/commonUtils";
import { InterestLists } from "modules";

interface copyProps {
    general: Array<string>;
    greetings: object;
    interests: Array<object>;
}

interface copyPropsParent {
    copy: copyProps;
}

const AboutMeBlock = ({ copy }: copyPropsParent) => {
    const { general, interests, greetings } = copy;
    const generalCopy = general.map((para, idx) => <p key={idx}>{para}</p>);
    return (
        <div className="about-me">
            <div className="profile-image">
                <img src="/img/gallery/darren.webp" alt="C'est moi!" />
            </div>
            <h2>{aboutGreeting({ copy: greetings })}</h2>
            {generalCopy}
            <h3>Interests</h3>
            <InterestLists interests={interests} />
        </div>
    );
};

export default AboutMeBlock;
