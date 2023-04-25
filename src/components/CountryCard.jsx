import {Link} from 'react-router-dom'

const CountryCard = ({flagUrl, flagAlt, countryName, population, region, capital}) => {
    return(
        <div className="bg-white dark:bg-dark-blue rounded shadow-lg overflow-hidden">
            <img src={flagUrl} alt={flagAlt} className='w-full aspect-w-3 aspect-h-2'/>
            <div className="p-8">
                <Link className='font-bold'>{countryName}</Link>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
        </div>
    )
}

export default CountryCard