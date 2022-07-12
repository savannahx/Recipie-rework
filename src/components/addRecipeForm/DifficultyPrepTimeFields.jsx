import "./difficultyPrepTimeFields.scss"
import ErrorMessage from "./ErrorMessage"
import Label from "./Label"

const DifficultyPrepTimeFields = ({
  recipeDifficulty,
  setRecipeDifficulty,
  recipePrepTime,
  recipePrepTimeError,
  recipeDifficultyError,
  setRecipeDifficultyError,
  setRecipeDifficultyValid,
  setRecipePrepTime,
  setRecipePrepTimeError,
  setRecipePrepTimeValid,
}) => {
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

  return (
    <>
      {/* Difficulty & Prep Time */}
      <div className='difficulty-prep-time-wrapper '>
        {/* Difficulty */}
        <div className='difficulty-wrapper'>
          <Label text='Difficulty Level' />
          <div className='difficulty-buttons-wrapper'>
            {/* Easy Button */}
            <label
              htmlFor='easy'
              onClick={difficultyValidation}
              className={`${
                recipeDifficulty === "easy"
                  ? "difficulty-buttons-active"
                  : "difficulty-buttons"
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
            {/* Moderate Button */}
            <label
              htmlFor='moderate'
              onClick={difficultyValidation}
              className={`${
                recipeDifficulty === "moderate"
                  ? "difficulty-buttons-active"
                  : "difficulty-buttons"
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
            {/* Hard Button */}
            <label
              htmlFor='hard'
              onClick={difficultyValidation}
              className={`${
                recipeDifficulty === "hard"
                  ? "difficulty-buttons-active"
                  : "difficulty-buttons"
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
          <ErrorMessage text={recipeDifficultyError} />
        </div>
        {/* PrepTime */}
        <div className='prep-time-wrapper'>
          <Label text='Prep Time' linkToInput='minutes-id' />
          <div className='mt-1 border rounded-lg sm:mt-2 lg:mt-3'>
            <label htmlFor='minutes' className='prep-time-input-wrapper'>
              <input
                type='text'
                value={recipePrepTime}
                onChange={prepTimeValidation}
                id='minutes-id'
                autoComplete='off'
                className='prep-time-input'
              />
              <div className='line'></div>
              <span className='mins'>Min</span>
            </label>
          </div>
          <ErrorMessage text={recipePrepTimeError} />
        </div>
      </div>
    </>
  )
}

export default DifficultyPrepTimeFields
