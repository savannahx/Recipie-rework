import Nav from "../layout/Nav"
import ShowRecipies from "../components/recipiesPageComps/showRecipies"
import Spacer from "../ui/Spacer"
import { useState } from "react"
import AddRecipe from "../components/recipiesPageComps/addRecipe"

const RecipiesPage = () => {
  // Show or Hide Form that Adds a Recipe
  const [showForm, setShowForm] = useState()

  return (
    <>
      <Spacer>
        {!showForm && <ShowRecipies setShowForm={setShowForm} />}
        {showForm && <AddRecipe setShowForm={setShowForm} />}
      </Spacer>
      {/* Bottom Nav */}
      <Nav />
    </>
  )
}

export default RecipiesPage
