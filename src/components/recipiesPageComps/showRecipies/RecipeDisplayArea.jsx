import { useContext } from "react"
import { RecipeContext } from "../../../context/RecipeContext"
import Add from "../../../images/add.svg"
import Card from "../../../ui/Card"
import Recipe from "../../Recipe"

const RecipeDisplayArea = ({ setShowForm }) => {
  const { recipies, deleteRecipe, addToFavorites, whichRecipe } =
    useContext(RecipeContext)

  const handleForm = () => {
    window.scrollTo(0, 0)
    setShowForm(true)
  }

  return (
    <>
      {/* Recipe Area */}
      <div className='grid content-between grid-cols-1 mt-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-6 lg:gap-7 2xl:gap-8'>
        {/* Add a New Recipe */}
        <div className='fixed z-10 flex items-center justify-center sm:p-4 sm:rounded-md sm:group sm:bg-softBg w-28 bottom-28 right-3 sm:relative sm:w-full sm:h-full sm:bottom-0 sm:right-0 sm:z-0'>
          <div
            onClick={handleForm}
            className='flex items-center justify-center w-full h-full cursor-pointer'>
            <img className='w-28 sm:w-40' src={Add} alt='add recipe icon' />
          </div>
        </div>
        {/* Display Available Recipies */}
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
    </>
  )
}

export default RecipeDisplayArea
