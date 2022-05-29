const NavFixer = ({ children }) => {
  return (
    <>
      <div className='fixed bottom-0 w-full'>{children}</div>
    </>
  )
}

export default NavFixer
