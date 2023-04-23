import ThemeSwitcherButton from './ThemeSwitcherButton'

const Navbar = () => {

  return(
    <div className='bg-white flex justify-between px-4 py-8 shadow-lg'>
      <a href="#" className='font-bold'>Where in the World?</a>
      <ThemeSwitcherButton />
    </div>
  ) 
}

export default Navbar