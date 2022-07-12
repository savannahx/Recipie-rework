import ErrorMessage from "./ErrorMessage"
import Label from "./Label"
import "./ingredientsField.scss"

const RecipeIngredientsField = ({
  recipeIngredient,
  addIngredients,
  recipeIngredients,
  recipeIngredientError,
  emptyIngredientsError,
  deleteIngredient,
  setRecipeIngredient,
  setRecipeIngredientValid,
  setRecipeIngredientError,
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
                  onClick={() => deleteIngredient(ingredient.id)}
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
