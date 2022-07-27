import ShowRecipies from "../components/ShowRecipies"
import Container from "../ui/Container"
import styles from "./favoritesPage.module.scss"
import { useLocation } from "react-router-dom"
import { useContext, useEffect } from "react"
import { RecipeContext } from "../context/RecipeContext"

const FavoritesPage = () => {
  // Get Location Object
  let location = useLocation()
  // Get Constants and Functions from Recipe Context - Firestore
  const {
    favorites,
    recipies,
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
    if (location.pathname === "/favorites") {
      setIsFavRecipe(true)
    }
  }, [location.pathname, setIsFavRecipe])

  return (
    <>
      <section className={styles["favorites-page"]}>
        <Container>
          <ShowRecipies title='Your Favorites' values={propValues} />
        </Container>
      </section>
    </>
  )
}

export default FavoritesPage
