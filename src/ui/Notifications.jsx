const MessageWrapper = ({ children }) => {
  return (
    <>
      <div className='fixed z-10 bottom-28 left-5'>
        <div className='self-start px-8 py-4 mt-5 text-lg bg-white rounded-lg shadow-md sm:text-2xl text-myRed'>
          {children}
        </div>
      </div>
    </>
  )
}
export default MessageWrapper
