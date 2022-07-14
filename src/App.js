import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import RecipiesPage from "./pages/RecipiesPage"
import RecipePage from "./pages/RecipePage"
import FavoritesPage from "./pages/FavoritesPage"
import Spinner from "./ui/Spinner"
import { useContext } from "react"
import { RecipeContext } from "./context/RecipeContext"

function App() {
  const { isLoading } = useContext(RecipeContext)

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              {isLoading && <Spinner size='100px' cssClass='spinner' />}
              {!isLoading && <HomePage />}
            </>
          }></Route>
        <Route
          path='/recipies'
          element={
            <>
              {isLoading && <Spinner size='100px' cssClass='spinner' />}
              {!isLoading && <RecipiesPage />}
            </>
          }></Route>
        <Route
          path='/favorites'
          element={
            <>
              {isLoading && <Spinner size='100px' cssClass='spinner' />}
              {!isLoading && <FavoritesPage />}
            </>
          }></Route>
        <Route
          path='/recipies/:recipeId'
          element={
            <>
              {isLoading && <Spinner size='100px' cssClass='spinner' />}
              {!isLoading && <RecipePage />}
            </>
          }></Route>
      </Routes>
    </>
  )
}

export default App
