import { Link } from "react-router-dom"
import "./nav.scss"
import { useLocation } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { HiClipboardList, HiHeart, HiHome } from "react-icons/hi"
import { RecipeContext } from "../context/RecipeContext"

const Nav = () => {
  const location = useLocation()
  const [changeBgColor, setChangeBgColor] = useState(false)
  const { setShowForm } = useContext(RecipeContext)

  useEffect(() => {
    if (
      location.pathname === "/recipies" ||
      location.pathname === "/favorites"
    ) {
      setChangeBgColor(true)
    }
  }, [location.pathname])

  const makeBgWhite = () => {
    setChangeBgColor(false)
    setShowForm(false)
  }
  const makeBgRed = () => {
    setChangeBgColor(true)
    setShowForm(false)
  }

  return (
    <>
      <nav className={`nav ${changeBgColor ? "navBGRed" : ""}`}>
        <ul className='linksWrapper'>
          {/* Go to Home Page Link */}
          <Link to='/' onClick={makeBgWhite}>
            <li className='linkWrapper'>
              <div className='iconWrapper'>
                <HiHome
                  size='40'
                  style={{ color: `${changeBgColor ? "#fff" : "#FF5F5F"}` }}
                />
              </div>
              <h3
                className={`${changeBgColor ? "linkTitleWhite" : "linkTitle"}`}>
                Home
              </h3>
            </li>
          </Link>
          {/* Go to Recipies Page Link */}
          <Link to='/recipies' onClick={makeBgRed}>
            <li className='linkWrapper'>
              <div className='iconWrapper'>
                <HiClipboardList
                  size='40'
                  style={{ color: `${changeBgColor ? "#fff" : "#FF5F5F"}` }}
                />
              </div>
              <h3
                className={`${changeBgColor ? "linkTitleWhite" : "linkTitle"}`}>
                Recipies
              </h3>
            </li>
          </Link>
          {/* Go to Favorites Page Link */}
          <Link to='/favorites' onClick={makeBgRed}>
            <li className='linkWrapper'>
              <div className='iconWrapper'>
                <HiHeart
                  size='40'
                  style={{ color: `${changeBgColor ? "#fff" : "#FF5F5F"}` }}
                />
              </div>
              <h3
                className={`${changeBgColor ? "linkTitleWhite" : "linkTitle"}`}>
                Favorites
              </h3>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Nav
