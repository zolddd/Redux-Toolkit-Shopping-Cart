/*los reducer actualizan el estado, son funciones puras en donde esta la logica para modificar el state*/
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  /* este es nuestro state */
  courses: [],
  cart: [],
  favorites: []
};

export const courseSlice = createSlice({
  name: "courses",
  initialState: initialState,
  reducers: {
    getData: (state, action) => {
      state.courses.push(action.payload);
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteToCart: (state, action) => {},
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
  },
});

export const { getData, addToCart, deleteToCart, addToFavorites } =
  courseSlice.actions;
export default courseSlice.reducer;
