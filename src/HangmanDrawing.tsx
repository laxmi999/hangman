const HEAD = <div className="hangman-head"></div>;
const BODY = <div className="hangman-body"></div>;
const RIGHT_ARM = <div className="hangman-right-arm"></div>;
const LEFT_ARM = <div className="hangman-left-arm"></div>;
const RIGHT_LEG = <div className="hangman-right-leg"></div>;
const LEFT_LEG = <div className="hangman-left-leg"></div>;

export function HangmanDrawing() {
  return (
    <div className="hangman">
      {HEAD}
      {LEFT_ARM}
      {BODY}
      {RIGHT_ARM}
      {LEFT_LEG}{RIGHT_LEG}
      <div className="hangman-hanger"></div>
      <div className="hangman-ceiling"></div>
      <div className="hangman-wall"></div>
      <div className="hangman-floor"></div>
    </div>
  );
}
