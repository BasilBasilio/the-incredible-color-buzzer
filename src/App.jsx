import Header from './components/Header'
import LeaderBoardButton from './components/LeaderBoardButtonLink'
import StartButton from './components/StartButtonLink'
import Game from './components/Game'
import Instruction from './components/Instruction'
import LeaderBoard from './components/LeaderBoard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ScoreProvider } from './components/ScoreContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <div className="flex flex-col justify-center items-center mt-16">
          <StartButton />
          <LeaderBoardButton />
        </div>
        <Instruction />
      </>
    ),
  },
  {
    path: "/start",
    element: (
      <Game />
    ),
  },
  {
    path: "/leaderboard",
    element: (
        <>
        <Header />
        <div className="flex flex-col justify-center items-center min-h-[70vh]">
        <LeaderBoard />
        </div>
        </>
    ),
  },
]);


function App() {
  return (
    <ScoreProvider>
      <RouterProvider router={router} />
    </ScoreProvider>
  );
}

export default App;
