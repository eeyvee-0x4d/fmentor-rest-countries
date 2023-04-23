import { useState } from 'react'

const ContinentsDropdown = () => {
    const [selectedContinent, setSelectedContinent] = useState('')

    const handleOptionChange = (e) => {
        setSelectedContinent(e.target.value)
    }

    return(
        <select value={selectedContinent} onChange={handleOptionChange} className='bg-white shadow-lg rounded outline-none w-[200px] p-4 appearance-none'>
            <option value="" className=''>Filter By Continent</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}

export default ContinentsDropdown