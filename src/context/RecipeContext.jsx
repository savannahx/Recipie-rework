import { createContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { db } from "../firebase/firebaseConfig"
import { storage } from "../firebase/firebaseConfig"
import {
  collection,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore"
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"

export const RecipeContext = createContext()

const RecipeContextProvider = ({ children }) => {
  const [recipies, setRecipies] = useState([])
  const [favorites, setFavorites] = useState([])
  const [showNotification, setShowNotification] = useState(false)
  const [message, setMessage] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [isFavRecipe, setIsFavRecipe] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isInFavorites, setIsInFavorites] = useState([])
  // Fetch recipies & favorites on mount and listen for real time changes
  useEffect(() => {
    setIsLoading(true)
    let recipies = []
    // This uses forEach, below we use map, both ways are valid
    onSnapshot(collection(db, "recipies"), (snapshot) => {
      snapshot.forEach((doc) => {
        recipies.push({ ...doc.data(), id: doc.id })
      })
      setRecipies(recipies)
      recipies = []
      setIsLoading(false)
    })
    // If using map then need to use on docs otherwise use the above way with forEach...
    onSnapshot(collection(db, "favorites"), (snapshot) => {
      setFavorites(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })
      )
    })
  }, [])
  // Adds a recipe in the 'recipies' firestore collection
  const addRecipe = (data, imageFile) => {
    const recipeFileRef = ref(storage, `recipies/${data.imgName}`)
    uploadBytes(recipeFileRef, imageFile)
      .then(() => {
        getDownloadURL(ref(recipeFileRef)).then((url) => {
          const sendRecipeData = async () => {
            await setDoc(doc(db, "recipies", uuidv4()), {
              img: url,
              recipeName: data.recipeName,
              description: data.description,
              ingredients: data.ingredients,
              difficulty: data.difficulty,
              prepTime: data.minutes,
            })
          }
          sendRecipeData()
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
  // Adds a recipe in the 'favorites' firestore collection
  const addToFavorites = (data) => {
    try {
      const checkIfExists = async () => {
        const docSnap = await getDoc(doc(db, "favorites", data.id))

        // Chekc if already in favorites
        if (docSnap.exists()) {
          setShowNotification(true)
          return setMessage("Already in favorites")
          // Put in favorites
        } else {
          try {
            const sendToFavorites = async () => {
              await setDoc(doc(db, "favorites", data.id), {
                img: data.img,
                recipeName: data.recipeName,
                description: data.description,
                ingredients: data.ingredients,
                difficulty: data.difficulty,
                prepTime: data.prepTime,
              })
            }
            sendToFavorites()
            setShowNotification(true)
            setMessage("Added to favorites")
            setIsInFavorites((prev) => [...prev, data.id])
          } catch (err) {
            console.error(err)
          }
        }
      }
      checkIfExists()
      // Removes notification after 5 seconds
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
  // Deletes a recipe from the 'recipies' firestore collection - If the same recipe is also in favorites it's also deleted from in there as well
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
  // Deletes a recipe from the 'favorites' firestore collection
  const deleteFromFavorites = (id) => {
    const deleteFavDocument = async () => {
      await deleteDoc(doc(db, "favorites", id))
      const newFavorites = isInFavorites.filter((item) => item !== id)
      setIsInFavorites(newFavorites)
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
          isFavRecipe,
          setIsFavRecipe,
          showNotification,
          message,
          showForm,
          setShowForm,
          isInFavorites,
          isLoading,
        }}>
        {children}
      </RecipeContext.Provider>
    </>
  )
}

export default RecipeContextProvider
