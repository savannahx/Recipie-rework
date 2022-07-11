import Logo from "../../images/recipie-black.svg"
import Img from "../../images/img-placeholder.png"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"

export const AddRecipeForm = ({ setShowForm, addRecipe }) => {
  const [recipeName, setRecipeName] = useState("")
  const [recipeNameError, setRecipeNameError] = useState("")
  const [recipeNameValid, setRecipeNameValid] = useState(false)

  const [recipeIngredient, setRecipeIngredient] = useState("")
  const [recipeIngredientError, setRecipeIngredientError] = useState("")
  const [recipeIngredientValid, setRecipeIngredientValid] = useState(false)

  const [recipeDifficulty, setRecipeDifficulty] = useState("easy")
  const [recipeDifficultyError, setRecipeDifficultyError] = useState("")
  const [recipeDifficultyValid, setRecipeDifficultyValid] = useState(true)

  const [recipePrepTime, setRecipePrepTime] = useState("")
  const [recipePrepTimeError, setRecipePrepTimeError] = useState("")
  const [recipePrepTimeValid, setRecipePrepTimeValid] = useState(false)

  const [recipeImage, setRecipeImage] = useState("")
  const [recipeImageError, setRecipeImageError] = useState("")
  const [recipeImageValid, setRecipeImageValid] = useState(false)

  const [imageFile, setImageFile] = useState([])

  const [recipeDescription, setRecipeDescription] = useState("")
  const [recipeDescriptionError, setRecipeDescriptionError] = useState("")
  const [recipeDescriptionValid, setRecipeDescriptionValid] = useState(false)

  const [recipeIngredients, setRecipeIngredients] = useState([])
  const [emptyIngredientsError, setEmptyIngredientsError] = useState("")

  const alphaNumSpaceRegex = /^[A-Za-z0-9 _]+$/
  const imageRegex = /(gif|jpe?g|tiff?|png|webp|bmp)$/i
  // Recipe Name
  const recipeNameValidation = (e) => {
    setRecipeName(e.target.value)
    if (e.target.value.match(alphaNumSpaceRegex)) {
      if (e.target.value.length > 30) {
        setRecipeNameValid(false)
        setRecipeNameError(
          "The recipe name must be less than 30 characters long"
        )
      }
      setRecipeName(e.target.value)
      setRecipeNameError("")
      setRecipeNameValid(true)
    } else if (e.target.value === "") {
      setRecipeNameValid(false)
      setRecipeNameError("")
    } else {
      setRecipeNameValid(false)
      setRecipeNameError(
        "The recipe name must be letters, numbers and spaces only"
      )
    }
  }
  // Recipe Ingredients
  const addIngredientValidation = (e) => {
    if (e.target.value.match(alphaNumSpaceRegex)) {
      if (e.target.value.length > 30) {
        setRecipeIngredientValid(false)
        setRecipeIngredientError(
          "Recipe ingredients must be less than 30 characters long"
        )
      }
      setRecipeIngredient(e.target.value)
      setRecipeIngredientError("")
      setRecipeIngredientValid(true)
    } else if (e.target.value === "") {
      setRecipeIngredient(e.target.value)
      setRecipeIngredientValid(false)
      setRecipeIngredientError("")
    } else {
      setRecipeIngredient(e.target.value)
      setRecipeIngredientValid(false)
      setRecipeIngredientError(
        "Recipe ingredients must be letters, numbers and spaces only"
      )
    }
  }
  // Difficulty Level
  const difficultyValidation = (e) => {
    if (
      recipeDifficulty === "easy" ||
      recipeDifficulty === "moderate" ||
      recipeDifficulty === "hard"
    ) {
      setRecipeDifficultyError("")
      setRecipeDifficultyValid(true)
    } else {
      setRecipeDifficultyError(
        "difficulty must be one of each: easy, moderate or hard"
      )
      setRecipeDifficultyValid(false)
    }
  }
  // Preparation Time
  const prepTimeValidation = (e) => {
    setRecipePrepTime(e.target.value)
    if (+e.target.value > 0 && +e.target.value <= 999) {
      setRecipePrepTime(e.target.value)
      setRecipePrepTimeError("")
      setRecipePrepTimeValid(true)
    } else if (e.target.value === "") {
      setRecipePrepTimeError("")
      setRecipePrepTimeValid(false)
    } else if (+e.target.value < 1 || +e.target.value > 999) {
      setRecipePrepTimeError("Minutes 1 up to 999")
      setRecipePrepTimeValid(false)
    } else {
      setRecipePrepTimeError("Numbers only please")
      setRecipePrepTimeValid(false)
    }
  }
  // Recipe Image
  const recipeImageValidation = (e) => {
    if (e.target.files[0].name.match(imageRegex)) {
      setRecipeImage(e.target.files[0].name)
      setImageFile(e.target.files[0])
      setRecipeImageError("")
      setRecipeImageValid(true)
    } else {
      setRecipeImageError(
        "Invalid image format please upload an image file with one of these extentions: gif, jpg, jpeg, tiff, png, webp, bmp"
      )
      setRecipeImage(`The ${e.target.files[0].name} file is not valid`)
      setRecipeImageValid(false)
    }
  }
  // Recipe Description
  const descriptionValidation = (e) => {
    setRecipeDescription(e.target.value)
    if (e.target.value.match(alphaNumSpaceRegex)) {
      if (e.target.value.length > 3000) {
        setRecipeDescriptionValid(false)
        setRecipeDescriptionError(
          "The recipe description must be less than 3000 characters long"
        )
      }
      setRecipeDescription(e.target.value)
      setRecipeDescriptionError("")
      setRecipeDescriptionValid(true)
    } else if (e.target.value === "") {
      setRecipeDescriptionValid(false)
      setRecipeDescriptionError("")
    } else {
      setRecipeDescriptionValid(false)
      setRecipeDescriptionError(
        "The recipe description must be letters, numbers and spaces only"
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
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='flex justify-center max-w-xs mt-7 sm:max-w-sm xl:max-w-2xl'>
          <img src={Logo} alt='Recipie Logo' className='w-3/6 sm:w-4/6' />
        </div>
        {/* Form */}
        <form onSubmit={submitRecipe} className='max-w-[1000px] mx-auto'>
          {/* Go Back Icon */}
          <div
            onClick={() => setShowForm(false)}
            className='cursor-pointer inline-block'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
              />
            </svg>
          </div>
          {/* Recipe Name */}
          <div className='flex flex-col w-full mt-5 sm:mt-8'>
            <label
              htmlFor='recipe-name'
              className='text-lg sm:text-xl lg:text-2xl'>
              Recipe name
            </label>
            <input
              type='text'
              value={recipeName}
              onChange={recipeNameValidation}
              id='recipe-name'
              autoComplete='off'
              className='w-full h-12 p-1 mt-1 text-xl border rounded-md border-slate-300 bg-gray-50 sm:text-2xl sm:h-14 lg:text-3xl lg:h-16 sm:mt-2 lg:mt-3'
            />
            <p className='self-start mt-3 text-lg text-rose-500 sm:text-xl lg:text-2xl'>
              {recipeNameError}
            </p>
          </div>
          {/* Ingredients */}
          <div>
            <div className='flex items-end w-full gap-3 mt-5 sm:mt-8 lg:mt-10'>
              <div className='w-full'>
                <label
                  htmlFor='recipe-name'
                  className='text-lg sm:text-xl lg:text-2xl'>
                  Ingredients
                </label>
                <input
                  type='text'
                  value={recipeIngredient}
                  onChange={addIngredientValidation}
                  id='recipe-name'
                  autoComplete='off'
                  className='w-full h-12 p-1 mt-1 text-xl border rounded-md border-slate-300 bg-gray-50 sm:text-2xl sm:h-14 lg:text-3xl lg:h-16 sm:mt-2 lg:mt-3'
                />
              </div>
              <div className=''>
                <button
                  type='button'
                  onClick={addIngredients}
                  className='h-12 px-5 text-white bg-black rounded-md sm:text-xl sm:h-14 lg:text-2xl lg:h-16'>
                  Add
                </button>
              </div>
            </div>
            <div className='flex flex-wrap self-start gap-x-3 '>
              {recipeIngredients.map((ingredient) => {
                return (
                  <div
                    key={ingredient.ingId}
                    className='px-4 py-1 mt-5 text-black rounded-full bg-rose-100 sm:text-lg sm:px-5 md:text-xl md:px-6 md:py-2 lg:text-2xl lg:px-7'>
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
            </div>
            <p className='self-start mt-3 text-lg text-rose-500 sm:text-xl lg:text-2xl'>
              {recipeIngredientError}
            </p>
            <p className='self-start mt-3 text-lg text-rose-500 sm:text-xl lg:text-2xl'>
              {emptyIngredientsError}
            </p>
          </div>
          {/* Difficulty & Prep Time */}
          <div className='flex justify-between w-full mt-5 items-top sm:mt-8 lg:mt-10'>
            {/* Difficulty */}
            <div className='w-4/6'>
              <p className='text-lg sm:text-xl lg:text-2xl'>Difficulty level</p>
              <div className='flex flex-wrap items-end justify-start gap-1 mt-1 sm:mt-2 lg:mt-3'>
                <label
                  htmlFor='easy'
                  onClick={difficultyValidation}
                  className={`${
                    recipeDifficulty === "easy" ? "bg-gray-800" : "bg-gray-400"
                  } block px-3 py-3 text-lg text-white bg-black rounded-lg sm:text-xl sm:px-8 sm:py-5 lg:text-2xl lg:px-12 lg:py-6 cursor-pointer`}>
                  <input
                    type='radio'
                    onClick={(e) => setRecipeDifficulty(e.target.value)}
                    value='easy'
                    id='easy'
                    name='difficulty'
                    className='hidden'
                  />
                  Easy
                </label>
                <label
                  htmlFor='moderate'
                  onClick={difficultyValidation}
                  className={`${
                    recipeDifficulty === "moderate"
                      ? "bg-gray-800"
                      : "bg-gray-400"
                  } block px-3 py-3 text-lg text-white bg-black rounded-lg sm:text-xl sm:px-8 sm:py-5 lg:text-2xl lg:px-12 lg:py-6 cursor-pointer`}>
                  <input
                    type='radio'
                    onClick={(e) => setRecipeDifficulty(e.target.value)}
                    value='moderate'
                    id='moderate'
                    name='difficulty'
                    className='hidden'
                  />
                  Moderate
                </label>
                <label
                  htmlFor='hard'
                  onClick={difficultyValidation}
                  className={`${
                    recipeDifficulty === "hard" ? "bg-gray-800" : "bg-gray-400"
                  } block px-3 py-3 text-lg text-white bg-black rounded-lg sm:text-xl sm:px-8 sm:py-5 lg:text-2xl lg:px-12 lg:py-6 cursor-pointer`}>
                  <input
                    type='radio'
                    onClick={(e) => setRecipeDifficulty(e.target.value)}
                    value='hard'
                    id='hard'
                    name='difficulty'
                    className='hidden'
                  />
                  Hard
                </label>
              </div>
              <p className='self-start mt-3 text-lg text-rose-500 sm:text-xl lg:text-2xl'>
                {recipeDifficultyError}
              </p>
            </div>
            {/* PrepTime */}
            <div className='flex flex-col items-start justify-end w-2/6'>
              <p className='text-lg sm:text-xl lg:text-2xl'>Prep time</p>
              <div className='mt-1 border rounded-lg sm:mt-2 lg:mt-3'>
                <label
                  htmlFor='minutes'
                  className='flex items-center justify-center w-full px-1'>
                  <input
                    type='text'
                    value={recipePrepTime}
                    onChange={prepTimeValidation}
                    // pattern='[0-9]*'
                    id='minutes'
                    autoComplete='off'
                    className='w-full px-2 py-2 text-lg font-medium cursor-pointer focus:outline-none sm:text-2xl sm:px-4 sm:py-4 lg:text-3xl lg:py-5'
                  />
                  <div className='h-8 mr-3 bg-black w-s'></div>
                  <span className='mr-3 text-lg sm:text-xl'>Min</span>
                </label>
              </div>
              <p className='self-start mt-3 text-lg text-rose-500 sm:text-xl lg:text-2xl'>
                {recipePrepTimeError}
              </p>
            </div>
          </div>
          {/* Image Upload */}
          <div className='flex flex-col w-full mt-5 sm:mt-8 lg:mt-10'>
            <label
              htmlFor='image-upload'
              className='flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer sm:h-56 lg:h-72'>
              <div className='w-12 sm:w-20 lg:w-28'>
                <img src={Img} alt='img placeholder icon' />
              </div>
              <p className='my-2 sm:text-xl sm:my-3 lg:my-4 lg:text-2xl'>
                {recipeImage ? recipeImage : "Upload your recipe image"}
              </p>
              <div className='px-6 py-2 text-white bg-black rounded-lg sm:py-3 sm:px-10 sm:text-lg lg:text-xl'>
                Browse
              </div>
              <input
                type='file'
                onChange={recipeImageValidation}
                id='image-upload'
                className='hidden w-full h-12 p-1 mt-1 text-xl border rounded-md border-slate-300 bg-gray-50'
              />
            </label>
            <p className='self-start mt-3 text-lg text-rose-500 sm:text-xl lg:text-2xl'>
              {recipeImageError}
            </p>
          </div>
          {/* Description */}
          <div className='flex flex-col w-full mt-5 sm:mt-8 lg:mt-10'>
            <label
              htmlFor='recipe-description'
              className='text-lg sm:text-xl lg:text-2xl'>
              Description
            </label>
            <textarea
              id='recipe-description'
              value={recipeDescription}
              onChange={descriptionValidation}
              autoComplete='off'
              className='w-full p-2 mt-1 text-xl border rounded-md border-slate-300 bg-gray-50 sm:py-4 sm:text-2xl lg:text-3xl sm:mt-2 lg:mt-3'
              rows='5'></textarea>
            <p className='self-start mt-3 text-lg text-rose-500 sm:text-xl lg:text-2xl'>
              {recipeDescriptionError}
            </p>
          </div>
          {/* Submit Button */}
          <button
            type='submit'
            className='w-full py-4 mt-5 text-xl text-white rounded-lg bg-myRed sm:py-5 sm:text-2xl sm:mt-8 lg:mt-10 lg:text-3xl'>
            Save Recipe
          </button>
        </form>
      </div>
    </>
  )
}

export default AddRecipeForm

/* <FormContainer>
{showForm && ( */
/* <AnimatePresence>
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}>
  <AddRecipeForm setShowForm={setShowForm} addRecipe={addRecipe} />
</motion.div>
</AnimatePresence> */
// )}
// </FormContainer>
