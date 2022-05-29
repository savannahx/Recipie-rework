import Nav from "../layout/Nav"
import ShowFavorites from "../components/ShowFavorites"
import Spacer from "../ui/Spacer"
import NavFixer from "../ui/NavFixer"

const FavoritesPage = () => {
  return (
    <>
      <Spacer>
        <ShowFavorites />
      </Spacer>
      {/* Bottom Nav */}
      <NavFixer>
        <Nav />
      </NavFixer>
    </>
  )
}

export default FavoritesPage
