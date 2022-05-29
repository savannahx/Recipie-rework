import Nav from "../layout/Nav"
import Logo from "../images/recipie-white.svg"
import ChefImage from "../images/Chef-icon.svg"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const HomePage = () => {
  return (
    <>
      {/* HomePage */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='p-5 flex flex-col items-center justify-center overflow-y-scroll w-full h-[calc(100vh_-_6.50rem)] bg-gradient-to-t from-gradBottom to-gradTop sm:p-10'>
          <div className='flex justify-center max-w-xs mt-7 sm:mt-0 sm:max-w-xl lg:max-w-2xl'>
            <img src={Logo} alt='Recipie Logo' className='w-4/6 lg:w-3/6 ' />
          </div>
          <div className='flex justify-center max-w-xs mt-5 sm:max-w-sm lg:max-w-xl'>
            <img
              src={ChefImage}
              alt='Recipie Logo'
              className='w-4/6 lg:w-3/6 '
            />
          </div>
          <h1 className='mt-8 text-3xl font-medium text-center text-white sm:text-4xl xl:text-5xl'>
            Your Cuisine your World
          </h1>
          <p className='px-2 mt-3 text-xl text-center text-white sm:text-2xl sm:px-10 xl:text-3xl'>
            Save your delicious and detailed recipes in one place
          </p>
          <div className='flex flex-col justify-center mt-10'>
            <Link
              to='/recipies'
              className='px-16 py-4 text-xl font-medium bg-white rounded-lg text-myRed sm:text-2xl sm:px-20 sm:py-5 xl:px-24 xl:text-3xl'>
              Go to Recipies
            </Link>
            <Link
              to='/favorites'
              className='px-16 py-4 text-xl font-medium bg-white rounded-lg text-myRed mt-7 sm:text-2xl sm:px-20 sm:py-5 xl:px-24 xl:text-3xl'>
              Go to Favorites
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Bottom Nav */}
      <Nav />
    </>
  )
}

export default HomePage
