import Nav from "../layout/Nav"
import "./homePage.scss"
import Logo from "../images/recipie-white.svg"
import ChefImage from "../images/Chef-icon.svg"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Container from "../ui/Container"
import { useEffect } from "react"

const HomePage = () => {
  useEffect(() => {
    console.log("homepage Ran")
  }, [])

  return (
    <>
      <AnimatePresence>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='homePage'>
          <Container>
            <div className='homeWrapper'>
              {/* Logo */}
              <div className='logoWrapper'>
                <img src={Logo} alt='Recipie Logo' className='logo' />
              </div>
              {/* Icon */}
              <div className='iconWrapper'>
                <img src={ChefImage} alt='Recipie Logo' className='icon' />
              </div>
              {/* Title */}
              <h1 className='title'>Your Cuisine your World</h1>
              {/* Copy */}
              <p className='copy'>
                Save your delicious and detailed recipes in one place
              </p>
              {/* Link Area */}
              <div className='linkWrapper'>
                {/* Go to Recipies Link */}
                <Link to='/recipies' className='link'>
                  Go to Recipies
                </Link>
                {/* Go to favorites Link */}
                <Link to='/favorites' className='link'>
                  Go to Favorites
                </Link>
              </div>
            </div>
          </Container>
        </motion.section>
      </AnimatePresence>
      {/* Bottom Nav */}
      <Nav />
    </>
  )
}

export default HomePage
