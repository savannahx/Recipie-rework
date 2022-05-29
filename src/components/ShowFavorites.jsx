import Logo from "../images/recipie-black.svg"
import Card from "../ui/Card"
import Recipe from "../components/Recipe"
import Container from "../ui/Container"
import Notifications from "../ui/Notifications"
import { AnimatePresence, motion } from "framer-motion"
import { useContext, useEffect } from "react"
import { RecipeContext } from "../store/RecipeContext"
import { useLocation } from "react-router-dom"

const ShowFavorites = () => {
  const {
    favorites,
    deleteFromFavorites,
    whichRecipe,
    setWhichRecipe,
    showNotification,
    message,
  } = useContext(RecipeContext)
  let location = useLocation()
  useEffect(() => {
    if (location.pathname === "/favorites") {
      setWhichRecipe(false)
    }
  }, [location.pathname, setWhichRecipe])

  return (
    <>
      <Container>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='relative flex flex-col items-center justify-center'>
            {showNotification && (
              <div className='fixed z-10 bottom-28 left-5'>
                <Notifications>{message}</Notifications>
              </div>
            )}
            <div className='flex items-center justify-center w-full max-w-xs mt-7 sm:max-w-sm xl:max-w-2xl'>
              <img src={Logo} alt='Recipie Logo' className='w-3/6 sm:w-4/6' />
            </div>
            <h2 className='self-start text-xl mt-7 sm:text-3xl'>
              Your Favorites
            </h2>
            <div className='grid content-between w-full grid-cols-1 gap-6 mt-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-8 lg:gap-9 2xl:gap-10'>
              {favorites.map((favorite) => {
                return (
                  <div key={favorite.id}>
                    <Card>
                      {!whichRecipe && (
                        <Recipe
                          listItem={favorite}
                          deleteFromFavorites={deleteFromFavorites}
                        />
                      )}
                    </Card>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </>
  )
}

export default ShowFavorites
