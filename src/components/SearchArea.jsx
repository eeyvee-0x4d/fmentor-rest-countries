import SearchBar from './SearchBar'
import ContinentsDropdown from './ContinentsDropdown'

const SearchArea = () => {
    return(
        <div className="bg-white my-8 px-2 flex flex-col gap-8">
            <SearchBar />
            <ContinentsDropdown />
        </div>
    )
}

export default SearchArea