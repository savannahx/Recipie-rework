import { HashLoader } from "react-spinners"
import "./spinner.scss"

const Spinner = ({ size, cssClass }) => {
  return (
    <>
      <div className={cssClass}>
        <HashLoader color='#e55b5b' size={size} />
      </div>
    </>
  )
}

export default Spinner
