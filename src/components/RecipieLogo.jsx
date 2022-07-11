import Logo from "../images/recipie-black.svg"
import "./recipieLogo.scss"

const RecipieLogo = () => {
  return (
    <>
      {/* Logo */}
      <div className='logo-wrapper'>
        <img src={Logo} alt='Recipie Logo' className='logo' />
      </div>
    </>
  )
}

export default RecipieLogo
