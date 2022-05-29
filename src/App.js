import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import RecipiesPage from "./pages/RecipiesPage"
import RecipePage from "./pages/RecipePage"
import RecipeContextProvider from "./store/RecipeContext"
import FavoritesPage from "./pages/FavoritesPage"

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <RecipeContextProvider>
              <HomePage />
            </RecipeContextProvider>
          }></Route>
        <Route
          path='/recipies'
          element={
            <RecipeContextProvider>
              <RecipiesPage />
            </RecipeContextProvider>
          }></Route>
        <Route
          path='/recipies/:recipeId'
          element={
            <RecipeContextProvider>
              <RecipePage />
            </RecipeContextProvider>
          }></Route>
        <Route
          path='/favorites'
          element={
            <RecipeContextProvider>
              <FavoritesPage />
            </RecipeContextProvider>
          }></Route>
      </Routes>
    </>
  )
}

export default App
