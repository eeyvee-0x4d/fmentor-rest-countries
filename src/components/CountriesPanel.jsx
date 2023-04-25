import CardLoadingSkeleton from "./CardLoadingSkeleton"
import CountryCard from "./CountryCard"

const CountriesPanel = ({ countries }) => {

    const cardArray = []

    for (let i = 0; i < countries.length; i++) {
        cardArray.push(
            <CountryCard
                flagUrl={countries[i].flags.png}
                flagAlt={countries[i].flags.alt}
                countryName={countries[i].name.official}
                population={countries[i].population}
                region={countries[i].region}
                capital={countries[i].capital}
                key={i}
            />
        )
    }

    return(
        <div className="px-16 flex flex-col gap-8">
            {/* {cardArray} */}
            <CardLoadingSkeleton/>
        </div>
    )
}

export default CountriesPanel