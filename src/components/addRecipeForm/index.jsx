import { BsArrowLeftCircleFill } from "react-icons/bs"
import RecipieLogo from "../RecipieLogo"
import { useState } from "react"
import "./index.scss"
import NameField from "./NameField"
import IngredientsField from "./IngredientsField"
import DifficultyPrepTimeFields from "./DifficultyPrepTimeFields"
import ImageUploadField from "./ImageUploadField"
import DescriptionField from "./DescriptionField"
import SubmitButton from "./SubmitButton"
import Spinner from "../../ui/Spinner"

export const AddRecipeForm = ({ setShowForm, addRecipe }) => {
  // Name State
  const [recipeName, setRecipeName] = useState("")
  const [recipeNameError, setRecipeNameError] = useState("")
  const [recipeNameValid, setRecipeNameValid] = useState(false)
  // Single Ingredient State
  const [recipeIngredient, setRecipeIngredient] = useState("")
  const [recipeIngredientError, setRecipeIngredientError] = useState("")
  const [recipeIngredientValid, setRecipeIngredientValid] = useState(false)
  // Ingredients List State
  const [recipeIngredients, setRecipeIngredients] = useState([])
  const [emptyIngredientsError, setEmptyIngredientsError] = useState("")
  const [recipeIngredientsValid, setRecipeIngredientsValid] = useState(false)
  // Difficulty State
  const [recipeDifficulty, setRecipeDifficulty] = useState("easy")
  const [recipeDifficultyError, setRecipeDifficultyError] = useState("")
  const [recipeDifficultyValid, setRecipeDifficultyValid] = useState(true)
  // PrepTime State
  const [recipePrepTime, setRecipePrepTime] = useState("")
  const [recipePrepTimeError, setRecipePrepTimeError] = useState("")
  const [recipePrepTimeValid, setRecipePrepTimeValid] = useState(false)
  // Image Name State
  const [recipeImage, setRecipeImage] = useState("")
  const [recipeImageError, setRecipeImageError] = useState("")
  const [recipeImageValid, setRecipeImageValid] = useState(false)
  // Image File State
  const [imageFile, setImageFile] = useState([])

  // Description State
  const [recipeDescription, setRecipeDescription] = useState("")
  const [recipeDescriptionError, setRecipeDescriptionError] = useState("")
  const [recipeDescriptionValid, setRecipeDescriptionValid] = useState(false)

  // Show - Hide Spinner
  const [showSpinner, setShowSpinner] = useState(false)

  // put all valid checker variables in an object so we can loop through it using the "every" JS method on an "Object.values" and check if all values are true - means they passed validation
  const valids = {
    name: recipeNameValid,
    ingredients: recipeIngredientsValid,
    difficulty: recipeDifficultyValid,
    prepTime: recipePrepTimeValid,
    image: recipeImageValid,
    description: recipeDescriptionValid,
  }
  // Create an object that holds all user input data
  const data = {
    imgName: recipeImage,
    minutes: recipePrepTime,
    difficulty: recipeDifficulty,
    recipeName: recipeName,
    ingredients: recipeIngredients,
    description: recipeDescription,
    // id: uuidv4(),
  }
  // Submit form
  const submitRecipe = (e) => {
    e.preventDefault()

    // Check if every value is true in the valids object
    const validData = Object.values(valids).every((option) => option === true)
    // If all data valid then submit
    if (validData) {
      addRecipe(data, imageFile)

      // Reset State
      setRecipeName("")
      setRecipeIngredients([])
      setRecipeDifficulty("easy")
      setRecipePrepTime("")
      setRecipeImage("")
      setRecipeDescription("")
      // Reset Valids
      setRecipeNameValid(false)
      setRecipeIngredientsValid(false)
      setRecipePrepTimeValid(false)
      setRecipeDescriptionValid(false)
      setRecipeImageValid(false)
      // scroll top the top

      setShowSpinner(true)
      // Takes you back to recipe screen
      setTimeout(() => {
        setShowSpinner(false)
        window.scrollTo(0, 0)
      }, 5000)

      // If not all values in valids object are true the run checks and show appropriate error messages
    } else {
      let keys = Object.keys(valids)
      keys.forEach((key) => {
        if (valids[key] === false) {
          if (key === "name") {
            setRecipeNameError("Please provide a recipe name")
          }
          if (key === "image") {
            setRecipeImageError("Please provide an image")
          }
          if (key === "ingredients") {
            setRecipeIngredientError("Please provide at least 1 ingredient")
          }
          if (key === "difficulty") {
            setRecipeDifficultyError("Please choose difficulty")
          }
          if (key === "prepTime") {
            setRecipePrepTimeError("Please provide valid minutes")
          }
          if (key === "description") {
            setRecipeDescriptionError("Please provide a recipe description")
          }
        }
      })
    }
  }

  return (
    <>
      <div className='form-wrapper'>
        <RecipieLogo />
        {/* Form */}
        <form onSubmit={submitRecipe} className='max-w-[1000px] mx-auto'>
          {/* Go Back Icon */}
          <div onClick={() => setShowForm(false)} className='arrow-back'>
            <BsArrowLeftCircleFill />
          </div>
          {/* Recipe Name */}
          <NameField
            recipeName={recipeName}
            recipeNameError={recipeNameError}
            setRecipeName={setRecipeName}
            setRecipeNameValid={setRecipeNameValid}
            setRecipeNameError={setRecipeNameError}
          />
          {/* Ingredients */}
          <IngredientsField
            recipeIngredient={recipeIngredient}
            recipeIngredients={recipeIngredients}
            recipeIngredientError={recipeIngredientError}
            emptyIngredientsError={emptyIngredientsError}
            setRecipeIngredient={setRecipeIngredient}
            setRecipeIngredientError={setRecipeIngredientError}
            setRecipeIngredientValid={setRecipeIngredientValid}
            recipeIngredientValid={recipeIngredientValid}
            setEmptyIngredientsError={setEmptyIngredientsError}
            setRecipeIngredients={setRecipeIngredients}
            setRecipeIngredientsValid={setRecipeIngredientsValid}
          />
          {/* Difficulty & Prep Time */}
          <DifficultyPrepTimeFields
            recipeDifficulty={recipeDifficulty}
            recipeDifficultyError={recipeDifficultyError}
            setRecipeDifficulty={setRecipeDifficulty}
            recipePrepTime={recipePrepTime}
            recipePrepTimeError={recipePrepTimeError}
            setRecipeDifficultyError={setRecipeDifficultyError}
            setRecipeDifficultyValid={setRecipeDifficultyValid}
            setRecipePrepTime={setRecipePrepTime}
            setRecipePrepTimeError={setRecipePrepTimeError}
            setRecipePrepTimeValid={setRecipePrepTimeValid}
          />
          {/* Image Upload */}
          <ImageUploadField
            recipeImage={recipeImage}
            setRecipeImage={setRecipeImage}
            setImageFile={setImageFile}
            setRecipeImageError={setRecipeImageError}
            setRecipeImageValid={setRecipeImageValid}
            recipeImageError={recipeImageError}
          />
          {/* Description */}
          <DescriptionField
            recipeDescription={recipeDescription}
            setRecipeDescription={setRecipeDescription}
            setRecipeDescriptionValid={setRecipeDescriptionValid}
            setRecipeDescriptionError={setRecipeDescriptionError}
            recipeDescriptionError={recipeDescriptionError}
          />
          {/* Submit Button */}
          <SubmitButton />

          {showSpinner && <Spinner size='50px' cssClass='smallerSpinner' />}
        </form>
      </div>
    </>
  )
}

export default AddRecipeForm
