import { Link } from "react-router-dom"
import styles from "./recipeCard.module.scss"
import { excerpt } from "../util/excerpt"
import { BsClockHistory, BsTrash, BsStar } from "react-icons/bs"

const RecipeCard = ({
  values: {
    deleteFromFavorites,
    isFavRecipe,
    deleteRecipe,
    addToFavorites,
    isInFavorites,
  },
  recipe,
}) => {
  return (
    <>
      <div className={styles["card-wrapper"]}>
        {/* Image */}
        <div className={styles["img-wrapper"]}>
          <img
            className={styles["img"]}
            src={recipe.img}
            alt={recipe.recipeName}
          />
        </div>
        {/* SVGs favorite-delete */}
        <div className={styles["action-button-area"]}>
          {isFavRecipe && (
            <BsTrash
              className={styles["action-button"]}
              onClick={() => deleteFromFavorites(recipe.id)}
            />
          )}
          {!isFavRecipe && (
            <BsTrash
              onClick={() => deleteRecipe(recipe.id)}
              className={styles["action-button"]}
            />
          )}
          {!isFavRecipe && (
            <BsStar
              onClick={() => addToFavorites(recipe)}
              className={styles["action-button"]}
            />
          )}
        </div>
        <div className={styles["card-content"]}>
          {/* PrepTime */}
          <div className={styles["prep-time-area"]}>
            <BsClockHistory className='clock-icon' />
            <p>
              - {recipe.prepTime}' {recipe.difficulty}
            </p>
          </div>
          {/* Name */}
          <h3 className={styles["recipe-title"]}>{recipe.recipeName}</h3>
          {/* Description */}
          <div className={styles["recipe-description"]}>
            <p>{excerpt(recipe.description, 60)}</p>
          </div>
          {/* Button */}
          <Link to={`/recipies/${recipe.id}`} className={styles["recipe-link"]}>
            Go to Recipe
          </Link>
        </div>
      </div>
    </>
  )
}

export default RecipeCard
