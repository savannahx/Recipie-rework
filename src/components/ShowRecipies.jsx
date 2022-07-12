import { AnimatePresence, motion } from "framer-motion"
import "./showRecipies.scss"
import Notifications from "../ui/Notifications"
import RecipeDisplayArea from "./RecipeDisplayArea"
import RecipieLogo from "./RecipieLogo"
import RecipieTitle from "./RecipieTitle"

const ShowRecipies = ({ title, values }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='recipe-display-wrapper'>
          <RecipieLogo />
          <RecipieTitle title={title} />
          <RecipeDisplayArea values={values} />
          {/* Notifications Area - Fixed to Bottom */}
          {values.showNotification && (
            <Notifications>{values.message}</Notifications>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default ShowRecipies
