import ErrorMessage from "./ErrorMessage"
import Label from "./Label"
import "./nameField.scss"

const RecipeNameField = ({
  recipeName,
  recipeNameError,
  setRecipeName,
  setRecipeNameValid,
  setRecipeNameError,
}) => {
  const alphaNumSpaceRegex = /^[A-Za-z0-9 _]+$/

  // Validate Recipe Name Input
  const recipeNameValidation = (e) => {
    setRecipeName(e.target.value)
    // Check if it matches the regex
    if (e.target.value.match(alphaNumSpaceRegex)) {
      // Check if it's over 30 characters
      if (e.target.value.length > 30) {
        setRecipeNameValid(false)
        setRecipeNameError(
          "The recipe name must be less than 30 characters long"
        )
      }
      // Pass the data - Empty error messages
      setRecipeName(e.target.value)
      setRecipeNameError("")
      setRecipeNameValid(true)
      // Check if field is empty
    } else if (e.target.value === "") {
      setRecipeNameValid(false)
      setRecipeNameError("")
      // Catch all
    } else {
      setRecipeNameValid(false)
      setRecipeNameError(
        "The recipe name must be letters, numbers and spaces only"
      )
    }
  }
  return (
    <>
      {/* Recipe Name Input Field */}
      <div className='name-input-wrapper'>
        <Label text='Recipe Name' linkToInput='name-input' />
        <input
          type='text'
          value={recipeName}
          onChange={recipeNameValidation}
          id='name-input'
          autoComplete='off'
          className='name-input'
        />
        <ErrorMessage text={recipeNameError} />
      </div>
    </>
  )
}

export default RecipeNameField
