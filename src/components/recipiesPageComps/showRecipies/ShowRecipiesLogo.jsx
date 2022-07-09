import Logo from "../../../images/recipie-black.svg"

const ShowRecipiesLogo = () => {
  return (
    <>
      {/* Logo */}
      <div className='flex items-center justify-center w-full max-w-xs mt-7 sm:max-w-sm xl:max-w-2xl'>
        <img src={Logo} alt='Recipie Logo' className='w-3/6 sm:w-4/6' />
      </div>
    </>
  )
}

export default ShowRecipiesLogo
