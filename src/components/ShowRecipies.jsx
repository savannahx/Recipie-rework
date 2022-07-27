import { AnimatePresence, motion } from "framer-motion"
import styles from "./showRecipies.module.scss"
import NotificationsWrapper from "../ui/NotificationsWrapper"
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
          className={styles["recipe-display-wrapper"]}>
          <RecipieLogo />
          <RecipieTitle title={title} />
          <RecipeDisplayArea values={values} />
          {/* Notifications Area - Fixed to Bottom */}
          {values.showNotification && (
            <NotificationsWrapper>{values.message}</NotificationsWrapper>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default ShowRecipies
