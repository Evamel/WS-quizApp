import React from "react";

type Card = {
    question: string,
    answers: string[],
    callback: any,
    userAnswer: any,
    QuestionNb: number,
    totalQuestions: number
}


const QuestionCard: React.FC<Card> = ({question, answers, callback, userAnswer, QuestionNb, totalQuestions}) => (
(<div>
    <p className="number">Question: {QuestionNb} / {totalQuestions}</p>
    <p dangerouslySetInnerHTML={{__html: question}}></p>
    <div>
        {answers.map (answer => (
            <div>
                <button disabled={userAnswer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}} />
                </button>
            </div>
        ))}
    </div>
</div>)
)

export default QuestionCard;