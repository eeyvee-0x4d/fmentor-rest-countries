import {
    useState,
    useEffect
} from 'react'

import Navbar from '../components/Navbar'
import SearchArea from '../components/SearchArea'
import CountriesPanel from '../components/CountriesPanel'

const Home = () => {

    const [theme, setTheme] = useState('light')
    const [countries, setCountries] = useState('')

    useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
    }, [theme])

    useEffect(() => {
    localStorage.theme = theme
    }, [theme])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
          .then(response => response.json())
          .then(data => {
            setCountries(data)
          })
          .catch(error => console.error(error))
      }, [])
    return(
        <>
            <SearchArea />
            <CountriesPanel countries={countries}/>
        </>
    )
}

export default Home