import { Link } from "react-router-dom"
import { excerpt } from "../util/excerpt"

const Recipe = ({
  listItem,
  deleteRecipe,
  addToFavorites,
  deleteFromFavorites,
  whichRecipe,
}) => {
  return (
    <>
      <div className='relative'>
        {/* Image */}
        <div className=''>
          <img
            className='object-cover w-full rounded-md h-96'
            src={listItem.img}
            alt={listItem.recipeName}
          />
        </div>
        {/* SVGs favorite-delete */}
        <div className=''>
          {!whichRecipe && (
            <button
              onClick={(e) => deleteFromFavorites(listItem.id)}
              className='absolute grid w-12 h-12 bg-white border-2 rounded-full top-3 right-2 place-content-center hover:bg-red-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
            </button>
          )}
          {whichRecipe && (
            <button
              onClick={() => deleteRecipe(listItem.id)}
              className='absolute grid w-12 h-12 bg-white border-2 rounded-full top-3 right-2 place-content-center hover:bg-red-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
            </button>
          )}
          {whichRecipe && (
            <button
              onClick={() => addToFavorites(listItem)}
              className='absolute grid w-12 h-12 bg-white border-2 rounded-full top-3 right-16 place-content-center hover:bg-red-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                />
              </svg>
            </button>
          )}
        </div>
        {/* PrepTime */}
        <div className='flex items-center justify-start mt-3 text-gray-500'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <span className='mx-2 text-lg sm:text-xl md:text-2xl'>-</span>
          <span className='mr-2 text-lg sm:text-xl md:text-2xl'>
            {listItem.prepTime}'
          </span>
          <span className='text-lg sm:text-xl md:text-2xl'>
            {listItem.difficulty}
          </span>
        </div>
        {/* Name */}
        <h3 className='mt-5 text-lg font-medium sm:text-xl md:text-2xl'>
          {listItem.recipeName}
        </h3>
        {/* Description */}
        <div className='mt-2 sm:text-lg md:text-xl'>
          <p>{excerpt(listItem.description, 30)}</p>
        </div>
        {/* Button */}
        <Link
          to={`/recipies/${listItem.id}`}
          className='flex justify-center align-center'>
          <button className='w-full px-10 py-3 mt-8 mb-2 text-xl text-white rounded-md bg-myRed lg:w-auto lg:text-2xl lg:py-4 lg:px-12 lg:mb-4 lg:mt-10'>
            Go to Recipe
          </button>
        </Link>
      </div>
    </>
  )
}

export default Recipe
