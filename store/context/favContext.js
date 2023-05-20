import { createContext, useState } from "react";

const defVal = {
  ids: [],
  addFavorite: (id) => { },
  removeFavorite: (id) => { },
}
export const favContext = createContext(defVal)

//////////////////////////////////////////////

function FavouriteContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([])

  function addFavorite(id) {
    setFavoriteMealIds((pstate) => [...pstate, id])
  }
  function removeFavorite(id) {
    setFavoriteMealIds((pstate) => pstate.filter(cid => cid !== id))
  }

  const val = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite
  }

  return <favContext.Provider value={val}>
    {children}
  </favContext.Provider>
}

export default FavouriteContextProvider