import { useState, useEffect } from 'react';

type WinningGifProps = {
  src?: string;
  alt?: string;
  showText: string;
  newPlay: () => void;
};

export function WinningGif({
  src = '',
  alt = '',
  showText,
  newPlay,
}: WinningGifProps) {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [src]);

  if (!showComponent) {
    return null;
  }

  return (
    <>
      {src && (
        <div className="winner-gif">
          <img src={src} alt={alt} />
        </div>
      )}
      <div className="text-bg">
        <div className="winner-text">{showText}</div>
        <div className="play-again" onClick={() => newPlay()}>
          Play Again
        </div>
      </div>
    </>
  );
}
