import { useScore } from './ScoreContext'
import ExitGameButton from './ExitGameButton'

export default function LeaderBoard() {
  const { scoreList } = useScore();
  console.log(scoreList);
  return (
    <div className="flex flex-col items-center p-4 min-h-screen">
      <div className="w-full max-w-xl bg-white p-4 rounded-lg shadow-md">
        {scoreList.length === 0 ? (
          <p className="text-lg">Leaderboard vuota!</p>
        ) : (
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left">Player</th>
                <th className="py-2 px-4 text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              {scoreList.slice(0, 10).map((player, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4 text-left font-mono text-lg">
                    {player.name}
                  </td>
                  <td className="py-2 px-4 text-right font-mono text-lg">
                    {player.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <ExitGameButton />
    </div>
  );
}
