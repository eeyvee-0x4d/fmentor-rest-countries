import SearchBar from './SearchBar'
import ContinentsDropdown from './ContinentsDropdown'

const SearchArea = () => {
    return(
        <div className="bg-white dark:bg-transparent my-8 p-2 flex flex-col gap-4">
            <SearchBar />
            <ContinentsDropdown />
        </div>
    )
}

export default SearchArea