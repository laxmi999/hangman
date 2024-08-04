import { useState } from 'react';
import words from './wordList.json';
import './index.css';
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import { Keyboard } from './Keyboard';

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  console.log(wordToGuess);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="main">
      <div className="header-text">Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}
export default App;
