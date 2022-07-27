import ShowRecipies from "../components/ShowRecipies"
import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import AddRecipeForm from "../components/addRecipeForm"
import Container from "../ui/Container"
import "./recipiesPage.scss"
import { RecipeContext } from "../context/RecipeContext"

const RecipiesPage = () => {
  // Get Location Object
  let location = useLocation()
  // Get Constants and Functions from Recipe Context - Firestore
  const {
    addRecipe,
    favorites,
    recipies,
    deleteRecipe,
    addToFavorites,
    isFavRecipe,
    setIsFavRecipe,
    message,
    showNotification,
    showForm,
    setShowForm,
    deleteFromFavorites,
    isInFavorites,
  } = useContext(RecipeContext)

  const propValues = {
    addRecipe,
    favorites,
    recipies,
    deleteRecipe,
    addToFavorites,
    isFavRecipe,
    setIsFavRecipe,
    message,
    showNotification,
    showForm,
    setShowForm,
    deleteFromFavorites,
    isInFavorites,
  }

  useEffect(() => {
    if (location.pathname === "/recipies") {
      setIsFavRecipe(false)
    }
  }, [location.pathname, setIsFavRecipe])

  return (
    <>
      <section
        className={`${showForm ? "recipies-page-white" : "recipies-page"}`}>
        <Container>
          {!showForm && (
            <ShowRecipies title='Your Recipies' values={propValues} />
          )}
          {showForm && (
            <AddRecipeForm setShowForm={setShowForm} addRecipe={addRecipe} />
          )}
        </Container>
      </section>
    </>
  )
}

export default RecipiesPage
