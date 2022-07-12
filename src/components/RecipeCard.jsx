import { Link } from "react-router-dom"
import { excerpt } from "../util/excerpt"
import "./recipeCard.scss"
import { BsClockHistory, BsTrash, BsStar } from "react-icons/bs"

const RecipeCard = ({
  values: {
    deleteFromFavorites,
    isFavRecipe,
    deleteRecipe,
    addToFavorites,
    listItem,
  },
  recipe,
}) => {
  return (
    <>
      <div className='card-wrapper'>
        {/* Image */}
        <div className='img-wrapper'>
          <img className='img' src={recipe.img} alt={recipe.recipeName} />
        </div>
        {/* SVGs favorite-delete */}
        <div className='action-button-area'>
          {isFavRecipe && (
            <button
              onClick={(e) => deleteFromFavorites(listItem.id)}
              className='action-button'>
              <BsTrash />
            </button>
          )}
          {!isFavRecipe && (
            <button
              onClick={() => deleteRecipe(listItem.id)}
              className='action-button'>
              <BsTrash />
            </button>
          )}
          {!isFavRecipe && (
            <button
              onClick={() => addToFavorites(listItem)}
              className='action-button'>
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
