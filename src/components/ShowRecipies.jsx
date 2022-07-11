import { AnimatePresence, motion } from "framer-motion"
import "./addRecipeForm/showRecipies.scss"
import { useContext, useEffect, useState } from "react"
import { RecipeContext } from "../context/RecipeContext"
import { useLocation } from "react-router-dom"
import Notifications from "../ui/Notifications"
import RecipeDisplayArea from "./reusableComps/RecipeDisplayArea"
import ShowRecipiesLogo from "./reusableComps/RecipieLogo"
import ShowRecipiesTitle from "./reusableComps/ShowRecipiesTitle"

const ShowRecipies = ({ setShowForm }) => {
  const { setWhichRecipe, message, showNotification, showForm } =
    useContext(RecipeContext)

  let location = useLocation()

  useEffect(() => {
    if (location.pathname === "/recipies") {
      setWhichRecipe(true)
    }
  }, [location.pathname, setWhichRecipe])

  return (
    <>
      {/* Show Add Recipe Card and Display Available Recipes - Hide the 'Add a Recipe'Form */}
      {!showForm && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='relative flex flex-col items-center justify-center'>
            <ShowRecipiesLogo />
            <ShowRecipiesTitle title='Your Recipies' />
            <RecipeDisplayArea setShowForm={setShowForm} />
            {/* Notifications Area - Fixed to Bottom */}
            {showNotification && <Notifications>{message}</Notifications>}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}

export default ShowRecipies
