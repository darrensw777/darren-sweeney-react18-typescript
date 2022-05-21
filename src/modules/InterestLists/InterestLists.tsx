interface ObjectProps {
    question?: string;
    answers?: Array<string>;
}

interface interestsProps {
    interests: ObjectProps[];
}

const InterestLists = ({ interests }: interestsProps) => {
    return (
        <>
            {interests.map((interest, idx) => {
                const { question, answers } = interest;
                return (
                    <div className="question-container" key={idx}>
                        <div className="question-container__question">{question}:</div>
                        <div className="question-container__answers">
                            <ul>
                                {answers?.map((answer, idx) => (
                                    <li key={idx}>{answer}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default InterestLists;
