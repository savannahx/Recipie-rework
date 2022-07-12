import "./label.scss"

const Label = ({ text, linkToInput }) => {
  return (
    <>
      <label htmlFor={linkToInput} className='label'>
        {text}
      </label>
    </>
  )
}

export default Label
