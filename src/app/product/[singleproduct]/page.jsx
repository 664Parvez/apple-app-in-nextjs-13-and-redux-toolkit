"use client"

import React, {useState, useEffect} from 'react'
import Image from "next/image"
import Link from 'next/link'
import signleProductCss from "../../../styles/productsingle.module.css"

import {useDispatch} from "react-redux"
import {addCart} from "../../redux/slices/Cartslice"


const SingleProduct = ({params}) => {

    const dispatch = useDispatch()
    
    const [newProduct, setNewProduct] = useState([])

    useEffect(() => {
        const products = async () => {
            const res = await fetch("http://localhost:3000/api/products")
            const data = await res.json()

            setNewProduct(data)
        }
        products()
    }, [])


  return (
    <>
        <div className={signleProductCss.product_single}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        {
                            newProduct.map((items) => {
                                return items.slug === params.singleproduct ? 
                                    <>
                                        <h5>{items.version}</h5>
                                        <h2>{items.name}</h2>
                                        <p><b>Category: {items.category}</b></p>
                                        <p>Release Date: {items.relesedate}</p>
                                        <Image src={items.image} width="10" height="10" layout="responsive" alt=''></Image>
                                    </>
                                    : ""
                            })
                        }
                    </div>
                    <div className="col-lg-6 col-md-6">
                        {
                            newProduct.map((items) => {
                                return items.slug === params.singleproduct ? 
                                    <>
                                        <h3>Price: <b>$ {items.price}</b></h3>
                                        <p>{items.description}</p>
                                        <p>{items.generation}</p>
                                        <p><b>{items.size}</b></p>
                                        <Link href="" onClick={() => dispatch(addCart(items))} className="btn btn-dark">Add to Cart</Link>
                                    </>
                                    : ""
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleProduct