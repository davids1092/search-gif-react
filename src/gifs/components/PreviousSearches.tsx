
interface Props {
    searches: string[]
    onLabelclick: (term: string) => void
}
export default function PreviousSearches({ searches, onLabelclick }: Props) {
    return (
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                {searches.map((search) => (
                    <li key={search} onClick={() => onLabelclick(search)}>{search}</li>
                ))}

            </ul>
        </div>
    )
}
