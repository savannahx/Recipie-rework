import styles from "./homePage.module.scss"
import Logo from "../images/recipie-white.svg"
import ChefImage from "../images/Chef-icon.svg"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Container from "../ui/Container"

const HomePage = () => {
  return (
    <>
      <AnimatePresence>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles["homePage"]}>
          <Container>
            <div className={styles["homeWrapper"]}>
              {/* Logo */}
              <div className={styles["logoWrapper"]}>
                <img src={Logo} alt='Recipie Logo' className={styles["logo"]} />
              </div>
              {/* Icon */}
              <div className={styles["iconWrapper"]}>
                <img
                  src={ChefImage}
                  alt='Recipie Logo'
                  className={styles["icon"]}
                />
              </div>
              {/* Title */}
              <h1 className={styles["title"]}>Your Cuisine your World</h1>
              {/* Copy */}
              <p className={styles["copy"]}>
                Save your delicious and detailed recipes in one place
              </p>
              {/* Link Area */}
              <div className={styles["linkWrapper"]}>
                {/* Go to Recipies Link */}
                <Link to='/recipies' className={styles["link"]}>
                  Go to Recipies
                </Link>
                {/* Go to favorites Link */}
                <Link to='/favorites' className={styles["link"]}>
                  Go to Favorites
                </Link>
              </div>
            </div>
          </Container>
        </motion.section>
      </AnimatePresence>
    </>
  )
}

export default HomePage
