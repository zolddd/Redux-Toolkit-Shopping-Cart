import { createSlice } from "@reduxjs/toolkit";
/*los reducer actualizan el estado, son funciones puras en donde esta la logica para modificar el state*/

const initialState = {
  /* este es nuestro state amorcito */
  courses: [],
  cart: [],
  favorites: [],
};

export const courseSlice = createSlice({
  name: "courses",
  initialState: initialState,
  reducers: {
    getData: (state, action) => {
      state.courses.push(action.payload);
    },
    addToCart: (state, action) => {
      
      let newItem = action.payload; 
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    },
    deleteToCart: (state, action) => {
      let itemToDelete = action.payload;

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemToDelete.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== itemToDelete.id),
          };
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteToFavorites: (state, action) => {
      let itemToDelete = action.payload;

      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== itemToDelete.id),
      }
     
    }
  },
});

export const { getData, addToCart, deleteToCart, addToFavorites,deleteToFavorites } =
  courseSlice.actions;
export default courseSlice.reducer;
