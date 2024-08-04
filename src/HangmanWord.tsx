export function HangmanWord() {
  const word = 'hello';
  const guessedLetters = ['e'];
  return (
    <div className="hangman-word">
      {word.split('').map((letter, index) => (
        <span style={{ borderBottom: '.1em solid black' }} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? 'visible'
                : 'hidden',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
