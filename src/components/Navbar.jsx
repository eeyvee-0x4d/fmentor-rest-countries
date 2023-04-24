import ThemeSwitcherButton from './ThemeSwitcherButton'

import { Link } from "react-router-dom";

const Navbar = ({ theme, onThemeChange }) => {

  return(
    <div className='bg-white dark:bg-dark-blue flex justify-between px-4 py-8 shadow-lg'>
      <Link to='/' className='font-bold'>Where in the world</Link>
      <ThemeSwitcherButton theme={theme} onThemeChange={onThemeChange}/>
    </div>
  ) 
}

export default Navbar