import {configureStore} from '@reduxjs/toolkit'
import usersliceReducer from './userSlice'

 export const Store=configureStore({
    reducer:{
    user:usersliceReducer
    }
})

