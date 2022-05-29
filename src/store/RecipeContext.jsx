import { createContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { db } from "../firebase/firebaseConfig"
import { storage } from "../firebase/firebaseConfig"
import {
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  deleteDoc,
} from "firebase/firestore"
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"

export const RecipeContext = createContext()

const RecipeContextProvider = ({ children }) => {
  const [recipies, setRecipies] = useState([])
  const [favorites, setFavorites] = useState([])
  const [whichRecipe, setWhichRecipe] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [message, setMessage] = useState("")
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const fetchRecipies = async () => {
      try {
        const data = await getDocs(collection(db, "recipies"))
        setRecipies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      } catch (err) {
        console.error(err)
      }
    }
    const fetchFavorites = async () => {
      try {
        const data = await getDocs(collection(db, "favorites"))
        setFavorites(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      } catch (err) {
        console.log(err)
      }
    }
    fetchFavorites()
    fetchRecipies()
  }, [])

  const addRecipe = (data, imageFile) => {
    const recipeFileRef = ref(storage, `recipies/${imageFile.name}`)
    uploadBytes(recipeFileRef, imageFile)
      .then(() => {
        getDownloadURL(ref(recipeFileRef)).then((url) => {
          const sendRecipe = async () => {
            await setDoc(doc(db, "recipies", uuidv4()), {
              img: url,
              recipeName: data.recipeName,
              description: data.description,
              ingredients: data.ingredients,
              difficulty: data.difficulty,
              prepTime: data.minutes,
            })
          }
          sendRecipe()
          const runMessages = () => {
            setShowNotification(true)
            setMessage("Added to recipies")

            setTimeout(() => {
              setShowNotification(false)
              setMessage("")
            }, 5000)
          }
          setShowForm(false)
          runMessages()
        })
      })
      .catch((err) => {
        console.log(`the file was not uploaded check error: ${err}`)
      })
  }
  const addToFavorites = (data) => {
    try {
      const checkIfExists = async () => {
        const docSnap = await getDoc(doc(db, "favorites", data.id))

        if (docSnap.exists()) {
          setShowNotification(true)
          return setMessage("Already in favorites")
        } else {
          try {
            const sendFavorite = async () => {
              await setDoc(doc(db, "favorites", data.id), {
                img: data.img,
                recipeName: data.recipeName,
                description: data.description,
                ingredients: data.ingredients,
                difficulty: data.difficulty,
                prepTime: data.prepTime,
              })
            }
            sendFavorite()
            setShowNotification(true)
            setMessage("Added to favorites")
          } catch (err) {
            console.error(err)
          }
        }
      }
      checkIfExists()
      const runMessages = () => {
        setTimeout(() => {
          setShowNotification(false)
          setMessage("")
        }, 5000)
      }
      runMessages()
    } catch (err) {
      console.log(err)
    }
  }
  const deleteRecipe = (id) => {
    const deleteDocument = async () => {
      await deleteDoc(doc(db, "recipies", id))
      await deleteDoc(doc(db, "favorites", id))
    }
    deleteDocument()
    const runMessages = () => {
      setShowNotification(true)
      setMessage("Deleted from recipies")

      setTimeout(() => {
        setShowNotification(false)
        setMessage("")
      }, 5000)
    }
    runMessages()
  }
  const deleteFromFavorites = (id) => {
    const deleteFavDocument = async () => {
      await deleteDoc(doc(db, "favorites", id))
    }
    deleteFavDocument()
    const runMessages = () => {
      setShowNotification(true)
      setMessage("Deleted from favorites")

      setTimeout(() => {
        setShowNotification(false)
        setMessage("")
      }, 5000)
    }
    runMessages()
  }

  return (
    <>
      <RecipeContext.Provider
        value={{
          recipies,
          addRecipe,
          deleteRecipe,
          favorites,
          addToFavorites,
          deleteFromFavorites,
          whichRecipe,
          setWhichRecipe,
          showNotification,
          message,
          showForm,
          setShowForm,
        }}>
        {children}
      </RecipeContext.Provider>
    </>
  )
}

export default RecipeContextProvider
