import ButtonLink from './ButtonLink'

export default function LeaderBoardButton() {
    return (
        <div className="mt-4">
            <ButtonLink to="/leaderboard" color="bg-gray-400">
                Leaderboard
            </ButtonLink>
        </div>
    );
}