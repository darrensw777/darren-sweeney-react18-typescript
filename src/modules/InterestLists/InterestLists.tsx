import { InterestsProps } from "utils/interfaces";
import { InterestListsWrapper } from 'modules/moduleStyles'
import { ReactElement } from "react";

const InterestLists = ({ interests }: InterestsProps): ReactElement => {
    return (
        <InterestListsWrapper>
            {interests.map((interest, idx) => {
                const { question, answers } = interest;
                const answerList = answers.map((answer, idx) => <li key={idx}>{answer}</li>);
                return (
                    <div className="question-container" key={idx}>
                        <div className="question-container__question">{question}:</div>
                        <div className="question-container__answers">
                            <ul>{answerList}</ul>
                        </div>
                    </div>
                );
            })}
        </InterestListsWrapper>
    );
};

export default InterestLists;
