import React from 'react';

const App = () => {

const startQuiz = async () => {

}

const checkAnswer = (e: React.MouseEvent<HTMLElement>) => {
  
}

const nextQuestion = () => {

}

  return (
    <div className="App">
      <h1>Quiz</h1>
      <button className="start" onClick={startQuiz}>Starting the quiz</button>
      <p className="score">Score: </p>
      <p>Loading questions...</p>
    </div>
  );
}

export default App;