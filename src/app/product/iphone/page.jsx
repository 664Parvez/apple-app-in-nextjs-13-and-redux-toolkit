"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import productCss from "../../../styles/product.module.css"

const Iphone = () => {

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
        <div id={productCss.first_section}>

            <div className="container">
                <h1 className='text-left'>Shop iPhone</h1>
                <h4 className='mb-5'>iPhone Product. Take Your Pick</h4>
            </div>

            <div className="container">
                <div className="row">
                    {
                        newProduct.map((items) => {
                            return items.category === "iphone" ? <>
                                <div key={items.id} className='col-lg-4 col-md-6 mt-3'>
                                    <div id={productCss.iphone_product_card}>
                                        <p>{items.version}</p>
                                        <h3>{items.name}</h3> 
                                        <Image src={items.image} width="20" height="20" layout='responsive' alt="" />
                                        <div className="row">
                                            <div className="col-7">
                                                <h5>$ {items.price}</h5>
                                            </div>
                                            <div className="col-5 text-end">
                                                <Link href={items.slug} className="btn btn-outline-secondary">Buy</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </> : ""
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Iphone