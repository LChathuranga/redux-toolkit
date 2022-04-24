import { configureStore } from "@reduxjs/toolkit";
import counterReduser from './counter'

export default configureStore({
    reducer:{
        counter: counterReduser
    }
})