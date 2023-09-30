"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import productCss from "../../../styles/product.module.css"

const Latest_product = () => {

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
                <h1 className='text-left'>Latest Apple Products</h1>
                <h4 className='mb-5'>All Latest Product. Take Your Pick</h4>
            </div>
            <div className="container">
                <div className="row">
                    {
                        newProduct.map((items) => {
                            return items.version === "New" ? 
                            <>
                                <div key={items.id} className='col-lg-4 col-md-6 mt-3'>
                                    <div id={productCss.product_card} aria-hidden="true">
                                        <p>{items.version}</p>
                                        <h3>{items.name}</h3>
                                        <div className={productCss.product_img}>
                                            <Image src={items.image} width="20" height="20" layout='responsive' alt="" />
                                        </div>
                                        <div className="row">
                                            <div className="col-7">
                                                <h5>$ {items.price}</h5>
                                            </div>
                                            <div className="col-5 text-end">
                                                <Link href={`/product/${items.slug}`} className="btn btn-outline-secondary">Buy</Link>
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

export default Latest_product
