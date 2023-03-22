import { configureStore } from '@reduxjs/toolkit'
import CourseReducer from '../features/courses/coursesSlice'
export const store = configureStore({
  reducer:{
    courses:CourseReducer
  }
})



/*import { configureStore } from '@reduxjs/toolkit'
import CourseReducer from '../features/courses/coursesSlice'

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, CourseReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)*/