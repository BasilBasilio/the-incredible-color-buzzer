import ButtonLink from './ButtonLink'

export default function ExitGameButton() {
    return (
        <div className="mt-4">
            <ButtonLink to="/" color="bg-red-500">
                Esci
            </ButtonLink>
        </div>
    )
}