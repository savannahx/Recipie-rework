import styles from "./recipieTitle.module.scss"

const ShowRecipiesTitle = ({ title }) => {
  return (
    <>
      <h2 className={styles["main-title"]}>{title}</h2>
    </>
  )
}

export default ShowRecipiesTitle
