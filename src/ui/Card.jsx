const Card = ({ children }) => {
  return (
    <>
      <div className='flex items-center justify-center sm:p-4 sm:rounded-md sm:group sm:bg-softBg'>
        {children}
      </div>
    </>
  )
}

export default Card
