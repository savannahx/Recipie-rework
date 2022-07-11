import Nav from "../layout/Nav"
// import ShowRecipies from "../components/recipiesPageComps/showRecipies"
import { useState } from "react"
// import AddRecipe from "../components/recipiesPageComps/addRecipe"
// import Container from "../ui/Container"

const RecipiesPage = () => {
  // Show or Hide Form that Adds a Recipe
  const [showForm, setShowForm] = useState()

  return (
    <>
      {/* <Container>
        {!showForm && <ShowRecipies setShowForm={setShowForm} />}
        {showForm && <AddRecipe setShowForm={setShowForm} />}
      </Container> */}
      {/* Bottom Nav */}
      <Nav />
    </>
  )
}

export default RecipiesPage
