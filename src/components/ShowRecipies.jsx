import Logo from "../images/recipie-black.svg"
import Add from "../images/add.svg"
import Card from "../ui/Card"
import Recipe from "./Recipe"
import AddRecipeForm from "./AddRecipeForm"
import Container from "../ui/Container"
import FormContainer from "../ui/FormContainer"
import { useContext, useEffect, useState } from "react"
import { RecipeContext } from "../store/RecipeContext"
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import Notifications from "../ui/Notifications"
import AddRecipeCard from "../ui/AddRecipeCard"

const ShowRecipies = () => {
  const {
    recipies,
    addRecipe,
    deleteRecipe,
    addToFavorites,
    whichRecipe,
    setWhichRecipe,
    message,
    showNotification,
    showForm,
    setShowForm,
  } = useContext(RecipeContext)

  let location = useLocation()

  useEffect(() => {
    if (location.pathname === "/recipies") {
      setWhichRecipe(true)
    }
  }, [location.pathname, setWhichRecipe])

  const handleForm = () => {
    window.scrollTo(0, 0)
    setShowForm(true)
  }

  return (
    <>
      <Container>
        {!showForm && (
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
                Your Recipies
              </h2>
              <div className='grid content-between grid-cols-1 mt-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-6 lg:gap-7 2xl:gap-8'>
                <AddRecipeCard>
                  <div
                    onClick={handleForm}
                    className='flex items-center justify-center w-full h-full cursor-pointer'>
                    <img
                      className='w-28 sm:w-40'
                      src={Add}
                      alt='add recipe icon'
                    />
                  </div>
                </AddRecipeCard>
                {recipies.map((recipe) => {
                  return (
                    <div key={recipe.id}>
                      <Card>
                        {whichRecipe && (
                          <Recipe
                            listItem={recipe}
                            addToFavorites={addToFavorites}
                            deleteRecipe={deleteRecipe}
                            whichRecipe={whichRecipe}
                          />
                        )}
                      </Card>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </Container>
      <FormContainer>
        {showForm && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <AddRecipeForm setShowForm={setShowForm} addRecipe={addRecipe} />
            </motion.div>
          </AnimatePresence>
        )}
      </FormContainer>
    </>
  )
}

export default ShowRecipies
