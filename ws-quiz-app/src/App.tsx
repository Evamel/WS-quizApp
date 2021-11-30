import React, {useState} from 'react';
import { fetchQuizQuestions } from './API';

import { QuestionState, Difficulty } from './API';

import QuestionCard from './components/QuestionCard';

type AnswerObject = {
  question: string,
  answers: string[],
  correct: boolean,
  correctAnswer: string,
}

const TOTAL_QUESTIONS = 10;

const App = () => {
const [loading, setLoading] = useState(false);
const [questions, setQuestions] = useState<QuestionState[]>([]);
const [number, setNumber] = useState(0);
const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
const [score, setScore] = useState(0);
const [gameOver, setGameOver] = useState(true);


const startQuiz = async () => {
setLoading(true);
setGameOver(false);

const newQuestion = await fetchQuizQuestions(
  TOTAL_QUESTIONS,
  Difficulty.EASY
);

setQuestions(newQuestion);
setScore(0);
setUserAnswers([]);
setNumber(0);
setLoading(false);

};

const checkAnswer = (e: React.MouseEvent<HTMLElement>) => {
  
};




const nextQuestion = () => {

};


  return (
    <div className="App">
      <h1>Quiz</h1>

      {gameOver || userAnswers.length === TOTAL_QUESTIONS ?
      (<button className="start" onClick={startQuiz}>Starting the quiz</button>) : null}
      {/* The button will appear only if the game is over or if the user answered all the questions */}

      {!gameOver ? <p className="score">Score: </p> : null}
      {/* The score will be displayed only if the game is not over */}
      {loading && <p>Loading questions...</p>}
      {/* The loading will be dispalyed only if the questions are loading */}

      {!loading && !gameOver && (<QuestionCard 
      QuestionNb={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      />)}
      {/* The questions will be displayed only if it's not loading and if the game is not over */}

      {!loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS ?
      (<button className="next" onClick={nextQuestion}>Next question</button>) : null}
      {/* The button will appear only if the game is not over, the questions are not loading, the user answers the question and if this isn't the last question */}
    </div>
  );
}

export default App;