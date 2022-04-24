import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        incrementById(state, action){
            state.count += action.payload
        }
    }
})

export const {increment, decrement, incrementById} = countSlice.actions
export default countSlice.reducer