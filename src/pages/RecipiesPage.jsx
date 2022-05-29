import Nav from "../layout/Nav"
import ShowRecipies from "../components/ShowRecipies"
import Spacer from "../ui/Spacer"
import NavFixer from "../ui/NavFixer"

const RecipiesPage = () => {
  return (
    <>
      <Spacer>
        <ShowRecipies />
      </Spacer>
      {/* Bottom Nav */}
      <NavFixer>
        <Nav />
      </NavFixer>
    </>
  )
}

export default RecipiesPage
