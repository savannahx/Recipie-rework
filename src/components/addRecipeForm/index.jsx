import { BsArrowLeftCircleFill } from "react-icons/bs"
import RecipieLogo from "../RecipieLogo"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import "./index.scss"
import NameField from "./NameField"
import IngredientsField from "./IngredientsField"
import DifficultyPrepTimeFields from "./DifficultyPrepTimeFields"
import ImageUploadField from "./ImageUploadField"
import DescriptionField from "./DescriptionField"
import SubmitButton from "./SubmitButton"

export const AddRecipeForm = ({ setShowForm, addRecipe }) => {
  // Name State
  const [recipeName, setRecipeName] = useState("")
  const [recipeNameError, setRecipeNameError] = useState("")
  const [recipeNameValid, setRecipeNameValid] = useState(false)
  // Single Ingredient State
  const [recipeIngredient, setRecipeIngredient] = useState("")
  const [recipeIngredientError, setRecipeIngredientError] = useState("")
  const [recipeIngredientValid, setRecipeIngredientValid] = useState(false)
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
  // Ingredients List State
  const [recipeIngredients, setRecipeIngredients] = useState([])
  const [emptyIngredientsError, setEmptyIngredientsError] = useState("")

  // Add Ingredients
  const addIngredients = () => {
    if (recipeIngredientValid) {
      setEmptyIngredientsError("")
      setRecipeIngredients([
        ...recipeIngredients,
        { ingName: recipeIngredient, ingId: uuidv4() },
      ])
      setRecipeIngredient("")
    }
  }
  //   Delete Ingredients
  const deleteIngredient = (id) => {
    const newIngredients = recipeIngredients.filter(
      (ingredient) => ingredient.id !== id
    )
    setRecipeIngredients(newIngredients)
    if (recipeIngredients.length === 1) {
      setRecipeIngredientValid(false)
      setEmptyIngredientsError("Please include at least 1 ingredient")
    }
  }

  // Last check
  const valids = {
    recipeName: recipeNameValid,
    recipeIngredient: recipeIngredientValid,
    recipeDifficulty: recipeDifficultyValid,
    recipePrepTime: recipePrepTimeValid,
    recipeImage: recipeImageValid,
    recipeDescription: recipeDescriptionValid,
  }
  const data = {
    img: recipeImage,
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

    const validData = Object.values(valids).every((option) => option === true)

    if (validData) {
      addRecipe(data, imageFile)

      setRecipeName("")
      setRecipeIngredients([])
      setRecipeDifficulty("easy")
      setRecipePrepTime("")
      setRecipeImage("")
      setRecipeDescription("")

      setRecipeNameValid(false)
      setRecipeIngredientValid(false)
      setRecipePrepTimeValid(false)
      setRecipeDescriptionValid(false)
      setRecipeImageValid(false)

      window.scrollTo(0, 0)
      // Takes you back to recipe screen
      setShowForm(false)
    } else {
      let keys = Object.keys(valids)
      keys.forEach((key) => {
        if (valids[key] === false) {
          if (key === "recipeName") {
            setRecipeNameError("Please provide a recipe name")
          }
          if (key === "recipeImage") {
            setRecipeImageError("Please provide an image")
          }
          if (key === "recipeIngredient") {
            setRecipeIngredientError("Please provide at least 1 ingredient")
          }
          if (key === "recipeDifficulty") {
            setRecipeDifficultyError("Please choose difficulty")
          }
          if (key === "recipePrepTime") {
            setRecipePrepTimeError("Please provide valid minutes")
          }
          if (key === "recipeImage") {
            setRecipeImageError("Please upload an image")
          }
          if (key === "recipeDescription") {
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
            addIngredients={addIngredients}
            recipeIngredients={recipeIngredients}
            recipeIngredientError={recipeIngredientError}
            emptyIngredientsError={emptyIngredientsError}
            deleteIngredient={deleteIngredient}
            setRecipeIngredient={setRecipeIngredient}
            setRecipeIngredientError={setRecipeIngredientError}
            setRecipeIngredientValid={setRecipeIngredientValid}
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
        </form>
      </div>
    </>
  )
}

export default AddRecipeForm
