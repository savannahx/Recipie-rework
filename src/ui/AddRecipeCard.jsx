const AddRecipeCard = ({ children }) => {
  return (
    <>
      <div className='fixed z-10 flex items-center justify-center sm:p-4 sm:rounded-md sm:group sm:bg-softBg w-28 bottom-28 right-3 sm:relative sm:w-full sm:h-full sm:bottom-0 sm:right-0 sm:z-0'>
        {children}
      </div>
    </>
  )
}

export default AddRecipeCard
