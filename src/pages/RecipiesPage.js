import Nav from "../layout/Nav"
import ShowRecipies from "../components/ShowRecipies"
import { useContext, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import AddRecipe from "../components/addRecipeForm"
import Container from "../ui/Container"
import "./recipiesPage.scss"
import { RecipeContext } from "../context/RecipeContext"

const RecipiesPage = () => {
  let location = useLocation()
  // Show or Hide Form that Adds a Recipe
  const [showForm, setShowForm] = useState(false)
  // Get Data from Recipe Context - Firestore
  const {
    recipies,
    deleteRecipe,
    addToFavorites,
    isFavRecipe,
    setIsFavRecipe,
    message,
    showNotification,
  } = useContext(RecipeContext)

  const values = {
    recipies,
    deleteRecipe,
    addToFavorites,
    isFavRecipe,
    setIsFavRecipe,
    message,
    showNotification,
  }

  useEffect(() => {
    if (location.pathname === "/recipies") {
      setIsFavRecipe(true)
    }
  }, [location.pathname, setIsFavRecipe])

  return (
    <>
      <section className='recipies-page'>
        <Container>
          {!showForm && (
            <ShowRecipies
              title='Your Recipies'
              setShowForm={setShowForm}
              values={values}
            />
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
