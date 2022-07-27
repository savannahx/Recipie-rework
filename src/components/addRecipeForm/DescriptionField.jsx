import ErrorMessage from "./ErrorMessage"
import Label from "./Label"
import styles from "./descriptionField.module.scss"

const DescriptionField = ({
  recipeDescription,
  setRecipeDescription,
  setRecipeDescriptionValid,
  setRecipeDescriptionError,
  recipeDescriptionError,
}) => {
  const alphaNumSpaceRegex = /^[A-Za-z0-9 _]+$/

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

  return (
    <>
      <div className={styles["description-wrapper"]}>
        <Label text='Description' linkToInput='description-id' />
        <textarea
          id='description-id'
          value={recipeDescription}
          onChange={descriptionValidation}
          autoComplete='off'
          className={styles["textarea-field"]}
          rows='5'></textarea>
        <ErrorMessage text={recipeDescriptionError} />
      </div>
    </>
  )
}

export default DescriptionField
