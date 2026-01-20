import { useEffect, useState, type KeyboardEvent } from "react";

interface SearchBarProps {
    placeholder?: string;
    onQuery: (query: string) => void
}
export const SearchBar = ({ placeholder = 'Buscar', onQuery }: SearchBarProps) => {
    const [query, setQuery] = useState('')
    //  wl useEffect se disp ara cuando elcomponente se monta o se desmonta 
    useEffect(() => {
        console.log('El componente SearchBar se ha montado')
        const timeOutId = setTimeout(() => {
            console.log('Buscando', query)
            onQuery(query)
        }, 800);
        // se llama cuando el componmente va a desaperecer
        return () => {
            clearTimeout(timeOutId)
        }
    }, [query, onQuery]);

    const handleSearch = () => {
        onQuery(query)
        setQuery('')
    }

    const handleOnKey = (event: KeyboardEvent<HTMLInputElement>) => {
        // console.log(event)
        if (event.key === 'Enter') {
            handleSearch()
        }
    }
    return (
        <div className="search-container">
            {/* <h1>{query}</h1> */}
            <input type="text" placeholder={placeholder || "Buscar Gifs"}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleOnKey}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}
