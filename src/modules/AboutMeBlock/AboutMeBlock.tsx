import { aboutGreeting } from "utils/commonUtils";
import {InterestLists} from 'modules'

// interface ObjectProps {
//     question: string;
//     answers: Array<string>;
// }

// interface interestsProps {
//     interests: Array<ObjectProps>;
// }

// const interestLists = ({ interests }: interestsProps) => {
//     return interests.map((interest, idx) => {
//         const { question, answers } = interest;
//         return (
//             <div className="question-container" key={idx}>
//                 <div className="question-container__question">{question}:</div>
//                 <div className="question-container__answers">
//                     <ul>
//                         {answers.map((answer, idx) => (
//                             <li key={idx}>{answer}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         );
//     });
// };

interface copyProps {
    general: Array<string>;
    greetings: Object;
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
