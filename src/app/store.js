import { configureStore } from '@reduxjs/toolkit'
import CourseReducer from '../features/courses/coursesSlice'
export const store = configureStore({
  reducer:{
    courses:CourseReducer
  }
})

/* dentro del configure store agrupa los datos en uno solo para que se pueda acceder despues */