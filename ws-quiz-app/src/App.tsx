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

const TOTAL_QUESTION = 10;

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
  TOTAL_QUESTION,
  Difficulty.EASY
);

setQuestions(newQuestion);
setScore(0);
setUserAnswers([]);
setNumber(0);
setLoading(false);

}

const checkAnswer = (e: React.MouseEvent<HTMLElement>) => {
  
}

const nextQuestion = () => {

}

  return (
    <div className="App">
      <h1>Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTION ? //The button will appear only if the game is over or if the user answered all the questions
      (<button className="start" onClick={startQuiz}>Starting the quiz</button>) : null}
      <p className="score">Score: </p>
      <p>Loading questions...</p>
      {/* <QuestionCard 
      QuestionNb={number + 1}
      totalQuestions={TOTAL_QUESTION}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>Next question</button>
    </div>
  );
}

export default App;