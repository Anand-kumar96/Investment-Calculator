import { useEffect, useState } from 'react'
import NavHeader from './NavHeader'
import NavIcons from './NavIcons'
import NavItems from './NavItems'
const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])
  if (width >= 992 && toggle){
    setToggle(false)
  }
    return (
      <nav className="navbar">
        <div className="nav-center">
          <NavHeader toggle={toggle} setToggle={setToggle} />
          <ul className={`nav-links ${toggle && 'show-links'}`} id="nav-links">
            <NavItems navClass={'nav'} />
          </ul>
          <ul className="nav-icons">
            <NavIcons navClass={'nav'} />
          </ul>
        </div>
      </nav>
    )
}
export default NavBar
