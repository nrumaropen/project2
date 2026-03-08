import { useState } from 'react';
import lg from './assets/lg.png';
import city from './assets/city.png';
import appa from './assets/appa.png';
import './App.css';

const cards = [
  {question: "Which nation does Aang belong to?", answer: "Air Nation", difficulty: "Easy"},
  {question: "Who is the last Airbender and the Avatar during the Hundred Year War?", answer: "Aang", difficulty: "Easy"},
  {question: "What animal companion can fly and carries Team Avatar around the world?", answer: "Appa", questionImage: appa, difficulty: "Easy"},
  {question: "Who is the Fire Nation prince that spends most of the series hunting the Avatar before changing sides?", answer: "Prince Zuko", difficulty: "Easy"},
  {question: "Which blind earthbender invented metalbending?", answer: "Toph", difficulty: "Easy"},
  {question: "What powerful comet greatly increases firebending abilities during the final battle?", answer: "Sozin's Comet", difficulty: "Medium"},
  {question: "Who becomes the Avatar after Aang?", answer: "Korra", difficulty:"Easy"},
  {question: "What is the name of the city where most of Korra’s early adventures take place?", answer: "Republic City", questionImage: city, difficulty:"Medium"},
  {question: "What rare bending ability allows someone to control another person's body using water?", answer: "Blood Bending", difficulty:"Hard"},
  {question: "Which Avatar created Republic City after the Hundred Year War?", answer: "Avatar Aang", difficulty:"Medium"}, 
  {question: "What spirit becomes permanently connected with the Avatar as the spirit of light and peace?", answer: "Raava", difficulty: "Hard"},
  {question: "Which Avatar lived long before Aang and was famous for being extremely strict about justice?", answer: "Avatar Kyoshi", difficulty: "Medium"}
];

const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  
  const [cardIndex, setCardIndex] = useState(0); 
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    if (cardIndex < cards.length - 1) {
      setCardIndex(cardIndex + 1);
      setShowAnswer(false);
    }
  };

  const preCard = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>

      <header>
        <h1>How Good of an ATLA Fan Are You?</h1>
        <h2>Let's Test It Out Today!</h2> 

        <button
          className="dark-mode-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <div className="body">
        <p>Question {cardIndex + 1} of {cards.length}</p>

        <div className="container">
          
          <div
            className={`card ${cards[cardIndex].difficulty}`}
            onClick={() => setShowAnswer(!showAnswer)}
          >
            <h3>
              {showAnswer ? cards[cardIndex].answer : cards[cardIndex].question}
            </h3>

            {!showAnswer && cards[cardIndex].questionImage && (
              <img src={cards[cardIndex].questionImage} alt="card visual" />
            )}
          </div>

          <div>
            <p>Difficulty: {cards[cardIndex].difficulty}</p>
        
            <button
              className="pre-btn"
              onClick={preCard}
            >
              Previous
            </button>

            <button
              className="next-btn"
              onClick={nextCard}
            >
              Next
            </button>
          </div>

        </div>

        <footer className='footer'>
          © 2026 ATLA Fan | Designed by nisarpn | All Rights Reserved
        </footer>
      </div>

    </div>
  );
};

export default App;