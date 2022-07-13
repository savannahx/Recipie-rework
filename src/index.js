import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { ScrollToTop } from "./util/scrollToTop"
import RecipeContextProvider from "./context/RecipeContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <RecipeContextProvider>
        <App />
      </RecipeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
