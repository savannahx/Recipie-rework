import Logo from "../images/recipie-black.svg"
import styles from "./recipieLogo.module.scss"

const RecipieLogo = () => {
  return (
    <>
      {/* Logo */}
      <div className={styles["logo-wrapper"]}>
        <img src={Logo} alt='Recipie Logo' className={styles["logo"]} />
      </div>
    </>
  )
}

export default RecipieLogo
