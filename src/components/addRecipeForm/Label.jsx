import styles from "./label.module.scss"

const Label = ({ text, linkToInput }) => {
  return (
    <>
      <label htmlFor={linkToInput} className={styles["label"]}>
        {text}
      </label>
    </>
  )
}

export default Label
