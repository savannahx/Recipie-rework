import "./notificationsWrapper.scss"

const NotificationsWrapper = ({ children }) => {
  return (
    <>
      <div className='notification'>{children}</div>
    </>
  )
}
export default NotificationsWrapper
