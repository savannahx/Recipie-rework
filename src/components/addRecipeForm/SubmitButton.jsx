import styles from "./submitButton.module.scss"

const SubmitButton = () => {
  return (
    <>
      <button type='submit' className={styles["submit-button"]}>
        Save Recipe
      </button>
    </>
  )
}

export default SubmitButton
