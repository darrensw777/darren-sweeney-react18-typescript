import { aboutGreeting } from 'utils/commonUtils';
import { InterestLists } from 'modules';
import { CopyPropsParent } from 'utils/interfaces';
import { AboutMeBlockWrapper } from 'modules/moduleStyles'

const AboutMeBlock = ({ copy }: CopyPropsParent) => {
    const { general, interests, greetings } = copy;
    const generalCopy = general.map((para, idx) => <p key={idx}>{para}</p>);
    return (
        <AboutMeBlockWrapper>
            <div className="about-me">
                <div className="profile-image">
                    <img src="/img/gallery/darren.webp" alt="C'est moi!" />
                </div>
                <h2>{aboutGreeting({ copy: greetings })}</h2>
                {generalCopy}
                <h3>Interests</h3>
                <InterestLists interests={interests} />
            </div>
        </AboutMeBlockWrapper>
    );
};

export default AboutMeBlock;
