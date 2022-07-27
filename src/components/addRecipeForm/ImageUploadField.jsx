import ImgIcon from "../../images/img-placeholder.png"
import ErrorMessage from "./ErrorMessage"
import styles from "./imageUploadField.module.scss"
import Label from "./Label"

const ImageUploadField = ({
  recipeImage,
  setRecipeImage,
  setImageFile,
  recipeImageError,
  setRecipeImageError,
  setRecipeImageValid,
}) => {
  // Image Validation
  const imageRegex = /(gif|jpe?g|tiff?|png|webp|bmp)$/i
  const recipeImageValidation = (e) => {
    if (e.target.files[0].name.match(imageRegex)) {
      setRecipeImage(e.target.files[0].name)
      setImageFile(e.target.files[0])
      setRecipeImageError("")
      setRecipeImageValid(true)
    } else {
      console.log("wrong format")
      setRecipeImageError(
        "Invalid image format please upload an image file with one of these extentions: gif, jpg, jpeg, tiff, png, webp, bmp"
      )
      setRecipeImage(`The ${e.target.files[0].name} file is not valid`)
      setRecipeImageValid(false)
    }
  }

  return (
    <>
      <div className={styles["image-field-wrapper"]}>
        <label htmlFor='image-upload' className={styles["label-wrapper"]}>
          <img
            src={ImgIcon}
            alt='upload icon'
            className={styles["image-icon"]}
          />
          <Label
            text={recipeImage ? recipeImage : "Upload your recipe image"}
          />
          <div className={styles["browse-button"]}>Browse</div>
          <input
            type='file'
            onChange={recipeImageValidation}
            id='image-upload'
            className={styles["img-input"]}
          />
        </label>
        <ErrorMessage text={recipeImageError} />
      </div>
    </>
  )
}

export default ImageUploadField
