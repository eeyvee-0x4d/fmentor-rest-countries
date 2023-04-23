import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' 

const SearchBar = () => {
    return(
        <div className="bg-white text-dark-gray shadow-lg rounded flex">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='px-8 py-4'/>
            <input type="text" placeholder='Search for a country...' className='grow outline-none pr-4'/>
        </div>
    )
}

export default SearchBar