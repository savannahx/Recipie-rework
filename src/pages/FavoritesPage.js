import Nav from "../layout/Nav"
import ShowFavorites from "../components/ShowFavorites"
import Spacer from "../ui/Spacer"

const FavoritesPage = () => {
  return (
    <>
      <Spacer>
        <ShowFavorites />
      </Spacer>
      {/* Bottom Nav */}
      <Nav />
    </>
  )
}

export default FavoritesPage
