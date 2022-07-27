import styles from "./errorMessage.module.scss"

const ErrorMessage = ({ text }) => {
  return (
    <>
      <p className={styles["name-error-message"]}>{text}</p>
    </>
  )
}

export default ErrorMessage
