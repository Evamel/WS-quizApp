import React from "react";
import DOMPurify from "dompurify";

type Card = {
    question: string,
    answer: string[],
    callback: any,
    userAnswer: any,
    QuestionNb: number,
    totalQuestions: number
}


const QuestionCard: React.FC<Card> = ({
    question, 
    answer =[],
    callback,
    userAnswer,
    QuestionNb,
    totalQuestions
}) => (
(<div>
    <p className="number">
    Question: {QuestionNb} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(question)}}></p>
    <div>
        {answer.map ((answer) => (
            <div key= {answer}>
                <button disabled={userAnswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(answer)}} />
                </button>
            </div>
        ))}
    </div>
</div>)
);

export default QuestionCard;