import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: 'favSlice',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id)
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    }
  }
})

export default favSlice.reducer
export const actions = favSlice.actions