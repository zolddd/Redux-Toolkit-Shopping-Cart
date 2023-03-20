/*los reducer actualizan el estado */
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id:1,
        title:"course 1"
    }
]

export const courseSlice= createSlice({
    name:"courses",
    initialState:[],
    reducers:{
      getData:(state,action)=>{
        state.push(action.payload)
        //state=[...action.payload]
        //state.splice(action.payload)
      },
      addToCart:(state,action)=>{
        
      }
    }
})
export const {getData} = courseSlice.actions
export default courseSlice.reducer