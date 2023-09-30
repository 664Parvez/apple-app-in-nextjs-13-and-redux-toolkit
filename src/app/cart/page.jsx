"use client"

import React, {useState, useEffect} from 'react'
import Image from "next/image"
import cartCss from "../../styles/cart.module.css"
import {BiUpArrow, BiDownArrow} from "react-icons/bi"
import {FaTimes} from "react-icons/fa"

import {useSelector, useDispatch} from "react-redux"
import {removeCart, increase, decrease, calculateTotal} from "../redux/slices/Cartslice"

const Cartpage = () => {

  const [totalProductPrice, setTotalProductPrice] = useState(0)

  const dispatch = useDispatch()

  const {items, itemCount, singleCount, totalPrice} = useSelector((item) => item.cart)


  useEffect(() => {
    dispatch(calculateTotal())
  }, [items])

  return (
    <>
      <div id={cartCss.cart_page}>
        <h1 className="text-center">Cart</h1>
        <div className="container">
            <div className="row">
              {
                items.length < 1 ? <h3>Cart Empty . . .</h3> :
                items.map((items) => {
                  return (
                    <>
                      <div className={cartCss.cart_card}>
                        <div className="row align-items-center">
                            <div className="col-2">
                              <Image src={items.image} width="10" height="10" layout="responsive" alt=""></Image>
                            </div>
                            <div className="col-3">
                              <h5>{items.name}</h5>
                            </div>
                            <div className="col-3"><h5>$ {items.price * items.quantity}</h5></div>
                            <div className="col-2">
                              <h5>
                                <button onClick={() => dispatch(increase(items.id))} className="btn btn-primary"><BiUpArrow/></button>
                                <span><h3>{items.quantity}</h3></span>
                                <button onClick={() => dispatch(decrease(items.id))} className="btn btn-primary"><BiDownArrow /></button>
                              </h5>
                            </div>
                            <div className="col-1">
                              <button onClick={() => dispatch(removeCart(items.id))} className="btn btn-danger"><FaTimes /></button>
                            </div>
                        </div>

                      </div>
                    </>
                  )
                })
              }
            </div>
                <h2>Total: {totalPrice}</h2>
        </div>
      </div>
    </>
  )
}

export default Cartpage