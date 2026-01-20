import { useRef, useState } from "react"
import type { Gif } from "../interfaces/gif.interface"
import { getGifsByquery } from "../actions/get-gifs-by-query-action"

// const cacheGifs = new Map<string, Gif[]>()
export const CustomHookGif = () => {

    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousSearches, setPreviousSearches] = useState<string[]>([])

    const cacheGifs = useRef(new Map<string, Gif[]>())
    const handleTermClicked = async (query: string) => {
        console.log({ query })
        // if (cacheGifs.has(query)) {
        //     const cachedGifs = cacheGifs.get(query)!
        //     setGifs(cachedGifs)
        //     return;
        // }

        if (cacheGifs.current.has(query)) {
            const cachedGifs = cacheGifs.current.get(query)!
            setGifs(cachedGifs)
            return;
        }



        const gifs = await getGifsByquery(query);
        setGifs(gifs);
    }

    const handleSearch = async (query: string) => {

        if (query.length === 0) return;
        query = query.trim().toLowerCase();


        if (previousSearches.includes(query)) return;

        const currentTerms = previousSearches.splice(0, 7);
        currentTerms.unshift(query);
        setPreviousSearches(currentTerms);

        // otra forma de hacerlo
        // setPreviousSearches([query, ...previousSearches].splice(0, 7));

        const gifs = await getGifsByquery(query);
        setGifs(gifs);
        cacheGifs.current.set(query, gifs);

        console.log({ cacheGifs })
    }

    return {
        // values
        previousSearches,
        gifs,
        // methods
        handleTermClicked,
        handleSearch
    }
}
