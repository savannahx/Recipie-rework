import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import { RecipeContext } from "../context/RecipeContext"
import { useParams } from "react-router-dom"
import Container from "../ui/Container"
import styles from "./recipePage.module.scss"
import { BsClockHistory } from "react-icons/bs"
import RecipieLogo from "../components/RecipieLogo"

const RecipePage = () => {
  const { recipies } = useContext(RecipeContext)
  const { recipeId } = useParams()

  const showRecipe = recipies.find((recipe) => recipe.id === recipeId)

  return (
    <>
      <Container>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles["recipe-page-wrapper"]}>
            <RecipieLogo />
            {/* Recipe */}
            <div className={styles["recipe-grid-wrapper"]}>
              <div className={styles["content-img-wrapper"]}>
                <div className={styles["content-wrapper"]}>
                  {/* Recipe Title */}
                  <h1 className={styles["title"]}>{showRecipe.recipeName}</h1>
                  {/* Recipe Description */}
                  <p className={styles["description"]}>
                    {showRecipe.description}
                  </p>
                </div>
                {/* Recipe Image */}
                <img
                  className={styles["img"]}
                  src={showRecipe.img}
                  alt={showRecipe.recipeName}
                />
              </div>
              {/* 3 elements */}
              <div className={styles["prep-time-difficulty-wrapper"]}>
                <BsClockHistory className={styles["clock-icon"]} />
                <p className={styles["prep-time-difficulty-copy"]}>
                  - {showRecipe.prepTime}' {showRecipe.difficulty}
                </p>
              </div>

              {/* Ingredients */}
              <div className={styles["ingredients-area-wrapper"]}>
                <p className={styles["ingredients-title"]}>Ingredients</p>
                <ul className={styles["ingredients-wrapper"]}>
                  {showRecipe.ingredients.map((ingredient) => {
                    return (
                      <li
                        key={ingredient.ingId}
                        className={styles["ingredient-name"]}>
                        {ingredient.ingName}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </>
  )
}

export default RecipePage
