import { HashLoader } from "react-spinners"
import "./spinner.scss"

const Spinner = () => {
  return (
    <>
      <div className='spinner'>
        <HashLoader color='#e55b5b' size='100' />
      </div>
    </>
  )
}

export default Spinner
