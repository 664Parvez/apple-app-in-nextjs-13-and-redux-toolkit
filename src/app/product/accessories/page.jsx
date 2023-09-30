"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import productCss from "../../../styles/product.module.css"

const Accessories = () => {

    const [newProduct, setNewProduct] = useState([])

    useEffect(() => {
        const products = async () => {
            const res = await fetch("https://apple-96iie2ux0-664parvez.vercel.app/api/products")
            const data = await res.json()

            setNewProduct(data)
        }
        products()
    }, [])

  return (
    <>
        <div id={productCss.first_section}>
            <div className="container">
                <h1 className='text-left'>Shop Accessories</h1>
                <h4 className='mb-5'>Apple Shop Product. Take Your Pick</h4>
            </div>
            <div className="container">
                <div className="row">
                    {
                        newProduct.map((items) => {
                            return items.category === "accessories" ? 
                            <>
                                <div key={items.id} className='col-lg-4 col-md-6 mt-3'>
                                    <div id={productCss.accressories_product_card} aria-hidden="true">
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

export default Accessories
