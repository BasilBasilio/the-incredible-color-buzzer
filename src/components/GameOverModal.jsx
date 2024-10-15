import { useState } from 'react'
import { useScore } from './ScoreContext'
import { useNavigate } from 'react-router-dom'
export default function GameOverModal({ score, onRetry, showModal }) {
  const { setScoreList } = useScore(); 
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  const saveScore = () => {
    if (playerName.trim() === '') {
      alert('Please enter a valid player name!');
      return;
    }
    
    setScoreList((scoreList) => {
      const updatedScores = [...scoreList, { name: playerName, score }];
      const sortedScores = updatedScores.sort((a, b) => b.score - a.score).slice(0, 10);
      localStorage.setItem('scores', JSON.stringify(sortedScores));
      return sortedScores;
    });
  };

  function handleOnClick() {
    saveScore();
    navigate('/leaderboard');
  }

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${showModal ? 'block' : 'hidden'}`}>
      <div className="bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
        <p className="mb-4">Il tuo punteggio: {score}</p>
        
        <input
          type="text"
          className="mb-2 p-2 border border-gray-300 rounded w-60"
          placeholder="Inserisci il tuo nome (3 lettere)"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value.toUpperCase())}
          maxLength="3" 
        />

        <div className="flex justify-between mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-28"
            onClick={onRetry}
          >
            Retry
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={handleOnClick}
          >
            Save Score
          </button>
        </div>
      </div>
    </div>
  );
};
