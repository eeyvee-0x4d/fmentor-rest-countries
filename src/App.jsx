import { useState, useEffect } from 'react'
import { Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  const [theme, setTheme] = useState('')

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
    localStorage.theme = theme === 'light' ? 'light' : 'dark'
  }, [theme])

  return (
    <div role='main' className='bg-very-light-gray dark:bg-very-dark-blue-dark text-very-dark-blue-light dark:text-white min-h-screen transition-all'>
        <Navbar theme={theme} onThemeChange={handleThemeChange} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='countries' element={<>Coutries</>} />
        </Routes>
    </div>
  )
}

export default App
