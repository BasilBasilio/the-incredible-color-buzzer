import { useState, useEffect } from 'react'
import RoundButton from './RoundButton'
import Timer from './Timer'
import GameOverModal from './GameOverModal'
import Score from './Score'
import ExitGameButton from './ExitGameButton'

const smallButtonColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
];
const grayButton = "bg-gray-400";
const initialTime = 9000; 
const minTime = initialTime / 5;

export default function Game() {
  const [bigButtonColor, setBigButtonColor] = useState(grayButton); 
  const [correctColor, setCorrectColor] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [colorChangeInterval, setColorChangeInterval] = useState(null);
  const [startTimer, setStartTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(9000);
  const [startTime, setStartTime] = useState(null);
  const [currentScore, setCurrentScore ] = useState(0);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
      const initialColorTimeout = setTimeout(() => {
      setStartTimer(true); 
      setStartTime(Date.now());
      changeBigButtonColor();
    }, 2000);

    return () => clearTimeout(initialColorTimeout);
  }, [startTimer, gameOver]);

  const changeBigButtonColor = () => {
    const randomColor = smallButtonColors[Math.floor(Math.random() * smallButtonColors.length)];
    setBigButtonColor(randomColor);
    setCorrectColor(randomColor);

    const intervalDuration = Math.random() * (1500 - 500) + 500;
    const intervalId = setTimeout(() => {
      changeBigButtonColor();
    }, intervalDuration);

    if (colorChangeInterval) {
      clearTimeout(colorChangeInterval);
    }
    setColorChangeInterval(intervalId);
  };

  const calculateScore = (elapsedTime) => {
    let earnedPoints = 0;
    const timeLimit = timeLeft; 

    if (elapsedTime <= timeLimit / 3) {
      earnedPoints = 50;
    } else if (elapsedTime <= (2 * timeLimit) / 3) {
      earnedPoints = 25;
    } else if (elapsedTime <= timeLimit) {
      earnedPoints = 10;
    }
    return earnedPoints;
  };

  const handleButtonClick = (color) => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    if (color === correctColor) {
      const earnedPoints = calculateScore(elapsedTime); 
      setCurrentScore((prevScore) => (prevScore + earnedPoints)); 
      startNextRound(); 
    } else {
      handleGameOver(); 
    }
  };

  const handleTimerComplete = () => {
    setGameOver(true); 
    clearTimeout(colorChangeInterval); 
  };

  const restartGame = () => {
    setCurrentScore(0);
    setGameOver(false);
    setBigButtonColor(grayButton);
    setStartTimer(false); 
    setStartTime(null); 
    setTimeLeft(initialTime); 
  };

  const updateTimeForNextRound = () => {
    setTimeLeft((prevTime) => {
      const newTime = prevTime - 200; 
      return newTime >= minTime ? newTime : minTime; 
    });
  };

  const startNextRound = () => {
    updateTimeForNextRound(); 
    setStartTimer(true);
    setStartTime(Date.now());  
    changeBigButtonColor(); 
  };

  const handleGameOver = () => {
    setGameOver(true);
    clearTimeout(colorChangeInterval);
    setShowModal(true);
  };

return (
  <div className="flex flex-col gap-20 justify-start items-center min-h-[70vh] mt-8">
    {gameOver ? (
      <GameOverModal 
        score={currentScore} 
        onRetry={restartGame}
        showModal={showModal} 
      />
    ) : (
      <>
        <div className="flex items-center space-x-72">
          <ExitGameButton /> 
          <Score score={currentScore} />
        </div>
        <Timer startTimer={startTimer} onComplete={handleTimerComplete} timeLeft={timeLeft} />
        <RoundButton
          color={bigButtonColor}
          size="w-64 h-64"
          onClick={gameOver ? null : handleButtonClick} 
        />
        <div className="flex items-center space-x-6">
          {smallButtonColors.map((color) => (
            <RoundButton
              key={color}
              color={color}
              size="w-16 h-16"
              onClick={() => handleButtonClick(color)}
            />
          ))}
        </div>
      </>
    )}
  </div>
);
}

