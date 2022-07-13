import Nav from "../layout/Nav"
import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import { RecipeContext } from "../context/RecipeContext"
import { useParams } from "react-router-dom"
import Container from "../ui/Container"
import "./recipePage.scss"
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
            className='recipe-page-wrapper'>
            <RecipieLogo />
            {/* Recipe */}
            <div className='recipe-grid-wrapper'>
              <div className='content-img-wrapper'>
                <div className='content-wrapper'>
                  {/* Recipe Title */}
                  <h1 className='title'>{showRecipe.recipeName}</h1>
                  {/* Recipe Description */}
                  <p className='description'>{showRecipe.description}</p>
                </div>
                {/* Recipe Image */}
                <img
                  className='img'
                  src={showRecipe.img}
                  alt={showRecipe.recipeName}
                />
              </div>
              {/* 3 elements */}
              <div className='prep-time-difficulty-wrapper'>
                <BsClockHistory className='clock-icon' />
                <p className='prep-time-difficulty-copy'>
                  - {showRecipe.prepTime}' {showRecipe.difficulty}
                </p>
              </div>

              {/* Ingredients */}
              <div className='ingredients-area-wrapper'>
                <p className='ingredients-title'>Ingredients</p>
                <ul className='ingredients-wrapper'>
                  {showRecipe.ingredients.map((ingredient) => {
                    return (
                      <li key={ingredient.ingId} className='ingredient-name'>
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

      {/* Bottom Nav */}
      <Nav />
    </>
  )
}

export default RecipePage
