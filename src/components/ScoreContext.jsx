import { useState, createContext, useContext, useEffect } from 'react'

const ScoreContext = createContext(null);

export const ScoreProvider = ({ children }) => {
  const [scoreList, setScoreList] = useState([]);

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem('scores')) || [];
    setScoreList(savedScores); 
  }, [setScoreList]);

  return (
    <ScoreContext.Provider value={{ scoreList, setScoreList }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => useContext(ScoreContext);
