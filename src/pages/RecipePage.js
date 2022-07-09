import Logo from "../images/recipie-black.svg"
import Nav from "../layout/Nav"
import Spacer from "../ui/Spacer"
import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import { RecipeContext } from "../context/RecipeContext"
import { useParams } from "react-router-dom"

const RecipePage = () => {
  const { recipies } = useContext(RecipeContext)
  const { recipeId } = useParams()
  const showRecipe = recipies.find((recipe) => recipe.id === recipeId)

  return (
    <>
      <Spacer>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='flex flex-col items-center justify-center'>
            <div className='flex justify-center max-w-xs mt-7 sm:max-w-sm xl:max-w-2xl'>
              <img src={Logo} alt='Recipie Logo' className='w-3/6 sm:w-4/6' />
            </div>
            {/* Recipe */}
            <div className='grid items-center justify-center grid-cols-1 gap-x-20 lg:grid-cols-2 lg:mt-10'>
              {/* Recipe Title */}
              <h2 className='self-start mb-3 text-xl mt-7 sm:text-3xl lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:'>
                {showRecipe.recipeName}
              </h2>
              {/* Recipe Image */}
              <img
                className='object-cover w-full max-w-2xl rounded-md lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2'
                src={showRecipe.img}
                alt={showRecipe.recipeName}
              />
              {/* 3 elements */}
              <div className='flex items-center justify-start mt-3 text-gray-500 place-self-start lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:mt-20'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <span className='mx-2 text-lg sm:text-xl md:text-2xl'>-</span>
                <span className='mr-2 text-lg sm:text-xl md:text-2xl'>
                  {showRecipe.prepTime}'
                </span>
                <span className='text-lg sm:text-xl md:text-2xl'>
                  {showRecipe.difficulty}
                </span>
              </div>
              {/* Recipe Description */}
              <p className='max-w-2xl mt-5 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:mt-40 xl:mt-20'>
                {showRecipe.description}
              </p>
              {/* Ingredients */}
              <div className='max-w-lg mt-10 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3'>
                <p className='text-lg'>Ingredients</p>
                <ul className='flex flex-wrap gap-3 mt-2'>
                  {showRecipe.ingredients.map((ingredient) => {
                    return (
                      <li
                        key={ingredient.ingId}
                        className='px-8 py-1 text-white rounded-lg bg-myRed'>
                        {ingredient.ingName}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Spacer>

      {/* Bottom Nav */}
      <Nav />
    </>
  )
}

export default RecipePage
