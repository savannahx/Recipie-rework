import { AnimatePresence, motion } from "framer-motion"
import "./showRecipies.scss"
import { useContext, useEffect, useState } from "react"
import { RecipeContext } from "../context/RecipeContext"
import { useLocation } from "react-router-dom"
import Notifications from "../ui/Notifications"
import RecipeDisplayArea from "./RecipeDisplayArea"
import RecipieLogo from "./RecipieLogo"
import RecipieTitle from "./RecipieTitle"

const ShowRecipies = ({ setShowForm, title }) => {
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
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='showRecipiesWrapper'>
          <RecipieLogo />
          <RecipieTitle title={title} />
          <RecipeDisplayArea setShowForm={setShowForm} />
          {/* Notifications Area - Fixed to Bottom */}
          {showNotification && <Notifications>{message}</Notifications>}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default ShowRecipies
