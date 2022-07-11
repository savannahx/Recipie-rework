import Nav from "../layout/Nav"
import ShowRecipies from "../components/ShowRecipies"
import { useContext, useState } from "react"
import AddRecipe from "../components/addRecipeForm"
import Container from "../ui/Container"
import "./recipiesPage.scss"

const RecipiesPage = () => {
  // Show or Hide Form that Adds a Recipe
  const [showForm, setShowForm] = useState(false)
  // Get Data from Recipe Context - Firestore
  const { recipies, deleteRecipe, addToFavorites, whichRecipe } =
    useContext(RecipeContext)

  return (
    <>
      <section className='recipies-page'>
        <Container>
          {!showForm && (
            <ShowRecipies title='Your Recipies' setShowForm={setShowForm} />
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
