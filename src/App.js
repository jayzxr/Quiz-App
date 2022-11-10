import React,{useState} from 'react';
import './App.css';

function App() {

  const [Results, setResults] = useState(false);
  const [Score, setScore] = useState(0);
  const [CurrentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text:'What year was the first Automobile was made ?',
      options: [
        {id: 0, text:'1891', isCorrect: false},
        {id: 1, text:'1886', isCorrect: true},
        {id: 2, text:'1881', isCorrect: false},
        {id: 3, text:'1897', isCorrect: false},
      ]
    },
    {
      text:'How many States are in US ?',
      options: [
        {id: 0, text:'47', isCorrect: false},
        {id: 1, text:'55', isCorrect: false},
        {id: 2, text:'51', isCorrect: false},
        {id: 3, text:'50', isCorrect: true},
      ]
    },
    {
      text:'What year was the light bulb invented in ?',
      options: [
        {id: 0, text:'1880', isCorrect: true},
        {id: 1, text:'1881', isCorrect: false},
        {id: 2, text:'1885', isCorrect: false},
        {id: 3, text:'1901', isCorrect: false},
      ]
    },
    {
      text:'What year US dollar was suspended from gold standard ?',
      options: [
        {id: 0, text:'1965', isCorrect: false},
        {id: 1, text:'1971', isCorrect: true},
        {id: 2, text:'1969', isCorrect: false},
        {id: 3, text:'1978', isCorrect: false},
      ]
    }
  ]

  function optionClicked(isCorrect){
    if(isCorrect){
      setScore(Score + 1)
    }
    if(CurrentQuestion + 1 < questions.length){
      setCurrentQuestion(CurrentQuestion + 1)
    } else {
      setResults(true)
    }
  }

  function RestartGame(){
    setScore(0)
    setCurrentQuestion(0)
    setResults(false)
  }

  return (
    <div className="App">
      <div className='text'>
        <h1>Quiz App</h1>
      </div>
      <div className='text'>
        <h2>Current Score: {Score}</h2>
      </div>
      {Results ? (
        <div className='final-results'>
          <h1>Results</h1>
          <h2>{Score} out of {questions.length} Correct
            - ({(Score/questions.length) * 100}%)</h2>
          <div>
            <button onClick={()=>{RestartGame()}}
              className='restart-button'>Restart Game
            </button>
          </div>
        </div>
      ) : (
        <div className='question-card'>
          <h1>{CurrentQuestion + 1} out of {questions.length}</h1>
          <h3 className='question-text'>{questions[CurrentQuestion].text}</h3>
          <ul className='ul-buttons'>
            {questions[CurrentQuestion].options.map((options)=>{
              return(
                <li
                  onClick={()=> optionClicked(options.isCorrect)}
                  key={options.id}>{options.text}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
