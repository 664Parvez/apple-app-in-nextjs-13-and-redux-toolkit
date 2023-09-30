"use client"

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    totalPrice: 0,
    amount: 0,
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {

            const indexItem = state.items.findIndex((item) => item.id === action.payload.id)

            if (indexItem >= 0) {
                state.items[indexItem].quantity += 1
            } else {
                const tempItem = {...action.payload, quantity: 1}
                state.items.push(tempItem)
            }
        },
        calculateTotal: (state) => {
            let amount = 0
            let total = 0

            state.items.forEach((item) => {
                amount += item.quantity
                total += item.quantity * item.price
            })

            state.amount = amount
            state.totalPrice = total
        },
        increase: (state, {payload}) => {
            let cartItem = state.items.find((item) => item.id === payload)
            cartItem.quantity = cartItem.quantity + 1
            if (cartItem.quantity <= 1) {
                cartItem.quantity = 1
            }
        },
        decrease: (state, {payload}) => {
            let cartItem = state.items.find((item) => item.id === payload)
            cartItem.quantity = cartItem.quantity - 1
            if (cartItem.quantity <= 1) {
                cartItem.quantity = 1
            }
        },
        removeCart: (state, action) => {
            const itemId = action.payload
            state.items = state.items.filter((item) => item.id !== itemId)
        }
    }
})

export const {addCart, removeCart, increase, decrease, calculateTotal} = CartSlice.actions
export default CartSlice.reducer