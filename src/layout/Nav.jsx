import { Link } from "react-router-dom"
import "./nav.scss"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

const Nav = () => {
  let location = useLocation()
  const [changeBgColor, setChangeBgColor] = useState(false)

  useEffect(() => {
    if (location.pathname !== "/") {
      setChangeBgColor(true)
    }
  }, [location.pathname])

  return (
    <>
      <nav className={`nav ${changeBgColor ? "navBGRed" : ""}`}>
        <ul className='linksWrapper'>
          {/* Go to Home Page Link */}
          <Link to='/' className='flex flex-col items-center'>
            <li className='linkWrapper'>
              <div className='iconWrapper'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-12 h-12'
                  viewBox='0 0 20 20'
                  fill={`${changeBgColor ? "#fff" : "#FF5F5F"}`}>
                  <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                </svg>
              </div>
              <h3
                className={`${changeBgColor ? "linkTitleWhite" : "linkTitle"}`}>
                Home
              </h3>
            </li>
          </Link>
          {/* Go to Recipies Page Link */}
          <Link to='/recipies' className='flex flex-col items-center'>
            <li className='linkWrapper'>
              <div className='iconWrapper'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-12 h-12'
                  viewBox='0 0 20 20'
                  fill={`${changeBgColor ? "#fff" : "#F55D5D"}`}>
                  <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
                  <path
                    fillRule='evenodd'
                    d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <h3
                className={`${changeBgColor ? "linkTitleWhite" : "linkTitle"}`}>
                Recipies
              </h3>
            </li>
          </Link>
          {/* Go to Favorites Page Link */}
          <Link to='/favorites' className='flex flex-col items-center'>
            <li className='linkWrapper'>
              <div className='iconWrapper'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-12 h-12'
                  viewBox='0 0 20 20'
                  fill={`${changeBgColor ? "#fff" : "#FF5F5F"}`}>
                  <path
                    fillRule='evenodd'
                    d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                    clipRule='evenodd'
                  />
                </svg>
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
