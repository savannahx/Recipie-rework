import Nav from "../layout/Nav"
import ShowRecipies from "../components/ShowRecipies"
import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import AddRecipe from "../components/addRecipeForm"
import Container from "../ui/Container"
import "./recipiesPage.scss"
import { RecipeContext } from "../context/RecipeContext"

const RecipiesPage = () => {
  // Get Location Object
  let location = useLocation()
  // Get Constants and Functions from Recipe Context - Firestore
  const {
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
  } = useContext(RecipeContext)

  const propValues = {
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
  }

  useEffect(() => {
    if (location.pathname === "/recipies") {
      setIsFavRecipe(false)
    }
  }, [location.pathname, setIsFavRecipe])

  return (
    <>
      <section className='recipies-page'>
        <Container>
          {!showForm && (
            <ShowRecipies title='Your Recipies' values={propValues} />
          )}
          {showForm && <AddRecipe setShowForm={setShowForm} />}
        </Container>
        {/* Bottom Nav */}
      </section>
      <Nav />
    </>
  )
}

export default RecipiesPage
