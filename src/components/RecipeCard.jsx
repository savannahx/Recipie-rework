import { Link } from "react-router-dom"
import { excerpt } from "../util/excerpt"
import "./recipeCard.scss"
import { BsClockHistory, BsTrash, BsStar } from "react-icons/bs"

const RecipeCard = ({ values, recipe }) => {
  return (
    <>
      <div className='card-wrapper'>
        {/* Image */}
        <div className='img-wrapper'>
          <img className='img' src={recipe.img} alt={recipe.recipeName} />
        </div>
        {/* SVGs favorite-delete */}
        <div className='absolute-them-for-now'>
          {/* {!values.isFavRecipe && (
            <button
              onClick={(e) => deleteFromFavorites(values.listItem.id)}
              className='absolute grid w-12 h-12 bg-white border-2 rounded-full top-3 right-2 place-content-center hover:bg-red-400'>
              <BsTrash />
            </button>
          )} */}
          {values.isFavRecipe && (
            <button
              onClick={() => values.deleteRecipe(values.listItem.id)}
              className='absolute grid w-12 h-12 bg-white border-2 rounded-full top-3 right-2 place-content-center hover:bg-red-400'>
              <BsTrash />
            </button>
          )}
          {values.isFavRecipe && (
            <button
              onClick={() => values.addToFavorites(values.listItem)}
              className='absolute grid w-12 h-12 bg-white border-2 rounded-full top-3 right-16 place-content-center hover:bg-red-400'>
              <BsStar />
            </button>
          )}
        </div>
        <div className='card-content'>
          {/* PrepTime */}
          <div className='prep-time-area'>
            <BsClockHistory className='clock-icon' />
            <p className='prep-time-copy'>
              - {recipe.prepTime}' {recipe.difficulty}
            </p>
          </div>
          {/* Name */}
          <h3 className='recipe-title'>{recipe.recipeName}</h3>
          {/* Description */}
          <div className='recipe-description'>
            <p>{excerpt(recipe.description, 60)}</p>
          </div>
          {/* Button */}
          <Link to={`/recipies/${recipe.id}`} className='recipe-link'>
            Go to Recipe
          </Link>
        </div>
      </div>
    </>
  )
}

export default RecipeCard
