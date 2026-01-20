
import { GifList } from "./gifs/components/GifList"
import PreviousSearches from "./gifs/components/PreviousSearches"

import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

import { CustomHookGif } from "./gifs/hooks/CustomHookGif"


export const GifsApp = () => {


    const { previousSearches, gifs, handleTermClicked, handleSearch } = CustomHookGif();


    return (
        <>
            {/* header */}
            <CustomHeader title="Buscador de Gifs" subtitle="Descubre y comparte el Gif perfecto" />

            {/* search */}
            <SearchBar placeholder="Buscar Gifs" onQuery={handleSearch} />

            {/* busquedas previas */}
            <PreviousSearches searches={previousSearches} onLabelclick={handleTermClicked} />

            {/* Gigs */}
            <GifList gifs={gifs} />
        </>
    )
}
