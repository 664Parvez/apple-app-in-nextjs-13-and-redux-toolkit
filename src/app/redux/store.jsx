"use client"

import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./slices/Cartslice"

const store = configureStore({
    reducer: {
        cart: CartSlice,
    }
})

export default store