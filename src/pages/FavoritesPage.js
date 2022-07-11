import Nav from "../layout/Nav"
import ShowRecipies from "../components/ShowRecipies"
import Container from "../ui/Container"

const FavoritesPage = () => {
  return (
    <>
      <Container>
        <ShowRecipies title='Your Favorites' />
      </Container>
      {/* Bottom Nav */}
      <Nav />
    </>
  )
}

export default FavoritesPage
