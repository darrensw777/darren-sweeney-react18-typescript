interface ObjectProps {
    question: string;
    answers: Array<string>;
}

interface InterestsProps {
    interests: ObjectProps[];
}

const InterestLists = ({ interests }: InterestsProps) => {
    return (
        <>
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
        </>
    );
};

export default InterestLists;
