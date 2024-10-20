const HEAD = <div className="hangman-head"></div>;
const BODY = <div className="hangman-body"></div>;
const RIGHT_ARM = <div className="hangman-right-arm"></div>;
const LEFT_ARM = <div className="hangman-left-arm"></div>;
const RIGHT_LEG = <div className="hangman-right-leg"></div>;
const LEFT_LEG = <div className="hangman-left-leg"></div>;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="hangman">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="hangman-hanger"></div>
      <div className="hangman-ceiling"></div>
      <div className="hangman-wall"></div>
      <div className="hangman-floor"></div>
    </div>
  );
}
