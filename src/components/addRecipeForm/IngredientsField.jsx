import ErrorMessage from "./ErrorMessage"
import Label from "./Label"
import { v4 as uuidv4 } from "uuid"
import "./ingredientsField.scss"

const RecipeIngredientsField = ({
  recipeIngredient,
  recipeIngredients,
  recipeIngredientError,
  emptyIngredientsError,
  setRecipeIngredient,
  setRecipeIngredientValid,
  setRecipeIngredientError,
  recipeIngredientValid,
  setEmptyIngredientsError,
  setRecipeIngredients,
  setRecipeIngredientsValid,
}) => {
  const alphaNumSpaceRegex = /^[A-Za-z0-9 _]+$/
  //   Validate Ingredient
  const addIngredientValidation = (e) => {
    // Check if it matches the regex
    if (e.target.value.match(alphaNumSpaceRegex)) {
      // Check if it's over 30 characters
      if (e.target.value.length > 30) {
        setRecipeIngredientValid(false)
        setRecipeIngredientError(
          "Recipe ingredients must be less than 30 characters long"
        )
      }
      // Pass the data - Empty error messages
      setRecipeIngredient(e.target.value)
      setRecipeIngredientError("")
      setRecipeIngredientValid(true)
      // Check if field is empty
    } else if (e.target.value === "") {
      setRecipeIngredient(e.target.value)
      setRecipeIngredientValid(false)
      setRecipeIngredientError("")
      // Catch all
    } else {
      setRecipeIngredient(e.target.value)
      setRecipeIngredientValid(false)
      setRecipeIngredientError(
        "Recipe ingredients must be letters, numbers and spaces only"
      )
    }
  }
  // Add Ingredients
  const addIngredients = () => {
    if (recipeIngredientValid) {
      setEmptyIngredientsError("")
      setRecipeIngredients([
        ...recipeIngredients,
        { ingName: recipeIngredient, ingId: uuidv4() },
      ])
      setRecipeIngredientsValid(true)
      setRecipeIngredient("")
      setRecipeIngredientError("")
    }
  }
  //   Delete Ingredients
  const deleteIngredient = (id) => {
    const newIngredients = recipeIngredients.filter(
      (ingredient) => ingredient.ingId !== id
    )
    setRecipeIngredients(newIngredients)
    if (newIngredients.length === 0) {
      setRecipeIngredientsValid(false)
      setRecipeIngredientError("Please add at least one recipe ingredient")
    }
  }

  return (
    <>
      {/* Ingredients Area */}
      <div className='ingredients-area'>
        {/* Ingredients Input Area */}
        <div className='ingredients-input-area'>
          {/* Ingredients Input */}
          <div className='ingredients-input-wrapper'>
            <Label text='Ingredients' linkToInput='ingredients-id' />
            <input
              type='text'
              value={recipeIngredient}
              onChange={addIngredientValidation}
              id='ingredients-id'
              autoComplete='off'
              className='ingredients-input'
            />
          </div>
          {/* Ingredients Add Button */}
          <button
            type='button'
            onClick={addIngredients}
            className='ingredients-button'>
            Add
          </button>
        </div>
        {/* Display Ingredients Area  */}
        <div className='ingredients-output-area'>
          {recipeIngredients.map((ingredient) => {
            return (
              // Single Ingredient
              <div key={ingredient.ingId} className='ingredient-styles'>
                <span>{ingredient.ingName}</span>
                <span
                  onClick={() => deleteIngredient(ingredient.ingId)}
                  className='text-xl cursor-pointer'>
                  {" "}
                  x
                </span>
              </div>
            )
          })}
          {/* Errors */}
          <ErrorMessage text={recipeIngredientError} />
          <ErrorMessage text={emptyIngredientsError} />
        </div>
      </div>
    </>
  )
}

export default RecipeIngredientsField
