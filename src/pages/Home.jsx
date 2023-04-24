import {
    useState,
    useEffect
} from 'react'

import Navbar from '../components/Navbar'
import SearchArea from '../components/SearchArea'
import CountriesPanel from '../components/CountriesPanel'

const Home = () => {

    const [theme, setTheme] = useState('light')

    const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    }

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
    return(
        <>
            <SearchArea />
            <CountriesPanel />
        </>
    )
}

export default Home