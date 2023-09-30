'use client'

import Link from "next/link"
import Image from "next/image"
import React, {useState, useEffect} from "react"
import {BiShoppingBag, BiSearch, BiLogoApple} from "react-icons/bi"
import {TbMenu} from "react-icons/tb"
import {LiaTimesSolid} from "react-icons/lia"

import NavbarCss from "../styles/navbar.module.css"

import {useSelector} from "react-redux"


const Navbar = () => {

    const [navbarChange, setNavbarChange] = useState(false)
    const [resNav, setResNev] = useState(false)
    const [crossIcon, setCrossIcon] = useState(false)

    let {items, amount} = useSelector((state) => state.cart)

    const navChange = () => {
        if(window.scrollY >= 60) {
            setNavbarChange(true)
        } else {
            setNavbarChange(false)
        }
    }

    useEffect(() => {
        if(resNav === true) {
            setCrossIcon(true)
        } else {
            setCrossIcon(false)
        }
    }, [resNav])

    useEffect(() => {
        window.addEventListener("scroll", navChange)
    }, [])

    return(
        <>
            <div className={navbarChange ? `${NavbarCss.scroll_nav}` : `${NavbarCss.nav}`}>
                <div className={navbarChange ? `${NavbarCss.logo_dark}` : `${NavbarCss.logo}`}>
                    <Link href="/"><BiLogoApple /></Link>
                </div>
                <ul className={NavbarCss.navItems}>

                    {/* Store */}
                    <li className={NavbarCss.store}><Link href="#">Store</Link>
                    <div id={navbarChange ? `${NavbarCss.storeDropScroll}` : `${NavbarCss.storeDrop}`}>
                        <div className="row">
                            <div className="col-3">
                                <ul id={NavbarCss.storeFirst}>
                                    <li className="mb-4">Store</li>
                                    <li><Link href="/product/latest-shop">Shop the latest</Link></li>
                                    <li><Link href="/product/mac">Mac</Link></li>
                                    <li><Link href="/product/ipad">iPad</Link></li>
                                    <li><Link href="/product/iphone">iPhone</Link></li>
                                    <li><Link href="/product/apple-watch">Apple Watch</Link></li>
                                    <li><Link href="/product/accessories">Accessories</Link></li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul>
                                    <li className="mb-4">Quick Link</li>
                                    <li><Link href="">Find a Store</Link></li>
                                    <li><Link href="">Order Status</Link></li>
                                    <li><Link href="">Apple Trade In</Link></li>
                                    <li><Link href="">Financing</Link></li>
                                    <li><Link href="">Collage Student Offer</Link></li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul>
                                    <li className="mb-4">Shop Special Stores</li>
                                    <li><Link href="">Certified Refurbished</Link></li>
                                    <li><Link href="">Education</Link></li>
                                    <li><Link href="">Business</Link></li>
                                    <li><Link href="">Veterance & Military</Link></li>
                                    <li><Link href="">Government</Link></li>
                                </ul>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                    </li>

                    {/* Mac */}
                    <li className={NavbarCss.mac}><Link href="#">Mac</Link>
                        <div className={navbarChange ? `${NavbarCss.macDropScroll}` : `${NavbarCss.macDrop}` }>
                            <div className="row">
                                <div className="col-3">
                                    <ul className={NavbarCss.macFirst}>
                                        <li className="mb-4">Explore Mac</li>
                                        <li><Link href="">Explore All Mac</Link></li>
                                        <li><Link href="">MacBook Air</Link></li>
                                        <li><Link href="">MacBook Pro</Link></li>
                                        <li><Link href="">iMac</Link></li>
                                        <li><Link href="">Mac mini</Link></li>
                                        <li><Link href="">Mac Studio</Link></li>
                                        <li><Link href="">Mac Pro</Link></li>
                                        <li><Link href="">Displays</Link></li>
                                        <li><Link href="">Compare Mac</Link></li>
                                        <li><Link href="">Mac Does That</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">Shop Mac</li>
                                        <li><Link href="">Shop Mac</Link></li>
                                        <li><Link href="">Mac Accessories</Link></li>
                                        <li><Link href="">Apple Trade In</Link></li>
                                        <li><Link href="">Financing</Link></li>
                                        <li><Link href="">College Student Offer</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">More from Mac</li>
                                        <li><Link href="">Mac Support</Link></li>
                                        <li><Link href="">macOS Sonoma Preview</Link></li>
                                        <li><Link href="">Final Cut Pro</Link></li>
                                        <li><Link href="">Logic Pro</Link></li>
                                        <li><Link href="">Continuity</Link></li>
                                        <li><Link href="">iCloud</Link></li>
                                        <li><Link href="">Mac for Business</Link></li>
                                        <li><Link href="">Education</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </li>

                    {/* iPad */}
                    <li className={NavbarCss.ipad}><Link href="#">iPad</Link>
                        <div className={navbarChange ? `${NavbarCss.ipadDropScroll}` : `${NavbarCss.ipadDrop}` }>
                            <div className="row">
                                <div className="col-3">
                                    <ul className={NavbarCss.ipadFirst}>
                                        <li className="mb-4">Explore iPad</li>
                                        <li><Link href="">Explore All iPad</Link></li>
                                        <li><Link href="">iPad Air</Link></li>
                                        <li><Link href="">iPad Pro</Link></li>
                                        <li><Link href="">iPad</Link></li>
                                        <li><Link href="">iPad mini</Link></li>
                                        <li><Link href="">Apple Pencil</Link></li>
                                        <li><Link href="">Keyboards</Link></li>
                                        <li><Link href="">Compare iPad</Link></li>
                                        <li><Link href="">Why iPad</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">Shop iPad</li>
                                        <li><Link href="">Shop iPad</Link></li>
                                        <li><Link href="">iPad Accessories</Link></li>
                                        <li><Link href="">Apple Trade In</Link></li>
                                        <li><Link href="">Financing</Link></li>
                                        <li><Link href="">College Student Offer</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">More From iPad</li>
                                        <li><Link href="">iPad Support</Link></li>
                                        <li><Link href="">iPadOS 17 Preview</Link></li>
                                        <li><Link href="">Final Cut Pro for iPad</Link></li>
                                        <li><Link href="">Logic Pro for iPad</Link></li>
                                        <li><Link href="">iCloud</Link></li>
                                        <li><Link href="">Education</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </li>

                    {/* iPhone */}
                    <li className={NavbarCss.iphone}><Link href="#">iPhone</Link>
                        <div className={navbarChange ? `${NavbarCss.iphoneDropScroll}` : `${NavbarCss.iphoneDrop}` }>
                            <div className="row">
                                <div className="col-3">
                                    <ul className={NavbarCss.iphoneFirst}>
                                        <li className="mb-4">Explore iPhone</li>
                                        <li><Link href="">Explore All iPhone</Link></li>
                                        <li><Link href="">iPhone 14 Pro</Link></li>
                                        <li><Link href="">iPhone 14</Link></li>
                                        <li><Link href="">iPhone 13</Link></li>
                                        <li><Link href="">iPhone 12</Link></li>
                                        <li><Link href="">iPhone SE</Link></li>
                                        <li><Link href="">Compare iPhone</Link></li>
                                        <li><Link href="">Switch from Android</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">Shop iPhone</li>
                                        <li><Link href="">Shop iPhone</Link></li>
                                        <li><Link href="">iPhone Accessories</Link></li>
                                        <li><Link href="">Apple Trade In</Link></li>
                                        <li><Link href="">Carrier Deals at Apple</Link></li>
                                        <li><Link href="">Financing</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">More From iPhone</li>
                                        <li><Link href="">iPhone Support</Link></li>
                                        <li><Link href="">iOS 17 Preview</Link></li>
                                        <li><Link href="">iPhone Privacy</Link></li>
                                        <li><Link href="">iCloud</Link></li>
                                        <li><Link href="">Wallet, Pay, Card</Link></li>
                                        <li><Link href="">Siri</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </li>

                    {/* Watch */}
                    <li className={NavbarCss.watch}><Link href="#">Watch</Link>
                        <div className={navbarChange ? `${NavbarCss.watchDropScroll}` : `${NavbarCss.watchDrop}` }>
                            <div className="row">
                                <div className="col-3">
                                    <ul className={NavbarCss.watchFirst}>
                                        <li className="mb-4">Explore Watch</li>
                                        <li><Link href="">Explore All Apple Watch</Link></li>
                                        <li><Link href="">Apple Watch Ultra</Link></li>
                                        <li><Link href="">Apple Watch Series 8</Link></li>
                                        <li><Link href="">Apple Watch SE</Link></li>
                                        <li><Link href="">Apple Watch Nike</Link></li>
                                        <li><Link href="">Apple Watch Hermès</Link></li>
                                        <li><Link href="">Compare Watch</Link></li>
                                        <li><Link href="">Why Apple Watch</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">Shop Watch</li>
                                        <li><Link href="">Shop Apple Watch</Link></li>
                                        <li><Link href="">Apple Watch Studio</Link></li>
                                        <li><Link href="">Apple Watch Bands</Link></li>
                                        <li><Link href="">Apple Watch Accessories</Link></li>
                                        <li><Link href="">Apple Trade In</Link></li>
                                        <li><Link href="">Financing</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">More From Watch</li>
                                        <li><Link href="">Apple Watch Support</Link></li>
                                        <li><Link href="">watchOS 10 Preview</Link></li>
                                        <li><Link href="">Apple Fitness+</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </li>

                    {/* Vision */}
                    <li><Link href="">Vision</Link></li>

                    {/* airpods */}
                    <li className={NavbarCss.airpod}><Link href='#'>AirPods</Link>
                        <div className={navbarChange ? `${NavbarCss.airpodDropScroll}` : `${NavbarCss.airpodDrop}` }>
                            <div className="row">
                                <div className="col-3">
                                    <ul className={NavbarCss.airpodFirst}>
                                        <li className="mb-4">Explore AirPods</li>
                                        <li><Link href="">Explore All AirPods</Link></li>
                                        <li><Link href="">AirPods 2nd generation</Link></li>
                                        <li><Link href="">AirPods 3rd generation</Link></li>
                                        <li><Link href="">AirPods Pro 2nd generation</Link></li>
                                        <li><Link href="">AirPods Max</Link></li>
                                        <li><Link href="">Compare AirPods</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">Shop AirPods</li>
                                        <li><Link href="">Shop AirPods</Link></li>
                                        <li><Link href="">AirPods Accessories</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">More From AirPods</li>
                                        <li><Link href="">AirPods Support</Link></li>
                                        <li><Link href="">Apple Music</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </li>

                    {/* tv and home */}
                    <li className={NavbarCss.tv}><Link href='#'>TV & Home</Link>
                        <div className={navbarChange ? `${NavbarCss.tvDropScroll}` : `${NavbarCss.tvDrop}` }>
                            <div className="row">
                                <div className="col-3">
                                    <ul className={NavbarCss.tvFirst}>
                                        <li className="mb-4">Explore TV & Home</li>
                                        <li><Link href="">Explore All TV & Home</Link></li>
                                        <li><Link href="">Apple TV 4K</Link></li>
                                        <li><Link href="">HomePod</Link></li>
                                        <li><Link href="">HomePod mini</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">Shop TV & Home</li>
                                        <li><Link href="">Shop Apple TV 4K</Link></li>
                                        <li><Link href="">Shop HomePod</Link></li>
                                        <li><Link href="">Shop HomePod mini</Link></li>
                                        <li><Link href="">Shop Siri Remote</Link></li>
                                        <li><Link href="">TV & Home Accessories</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">More From TV & Home</li>
                                        <li><Link href="">Apple TV Support</Link></li>
                                        <li><Link href="">HomePod Support</Link></li>
                                        <li><Link href="">Apple TV app</Link></li>
                                        <li><Link href="">Apple TV+</Link></li>
                                        <li><Link href="">Home app</Link></li>
                                        <li><Link href="">Apple Music</Link></li>
                                        <li><Link href="">Siri</Link></li>
                                        <li><Link href="">AirPlay</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </li>

                    {/* intertainment */}
                    <li className={NavbarCss.intertain}><Link href='#'>Intertainment</Link>
                        <div className={navbarChange ? `${NavbarCss.intertainDropScroll}` : `${NavbarCss.intertainDrop}` }>
                            <div className="row">
                                <div className="col-3">
                                    <ul className={NavbarCss.intertainFirst}>
                                        <li className="mb-4">Explore Intertainment</li>
                                        <li><Link href="">Explore Intertainment</Link></li>
                                        <li><Link href="">Apple One</Link></li>
                                        <li><Link href="">Apple TV+</Link></li>
                                        <li><Link href="">Apple Music</Link></li>
                                        <li><Link href="">Apple Arcade</Link></li>
                                        <li><Link href="">Apple Fitness+</Link></li>
                                        <li><Link href="">Apple News+</Link></li>
                                        <li><Link href="">Apple Podcasts</Link></li>
                                        <li><Link href="">Apple Books</Link></li>
                                        <li><Link href="">App Store</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">Support</li>
                                        <li><Link href="">Apple TV+ Support</Link></li>
                                        <li><Link href="">Apple Music Support</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3"></div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </li>

                    {/* accessories */}
                    <li className={NavbarCss.access}><Link href='#'>Accessories</Link>
                        <div className={navbarChange ? `${NavbarCss.accessDropScroll}` : `${NavbarCss.accessDrop}` }>
                            <div className="row">
                                <div className="col-3">
                                    <ul className={NavbarCss.accessFirst}>
                                        <li className="mb-4">Shop Accessories</li>
                                        <li><Link href="">Explore All Accessories</Link></li>
                                        <li><Link href="">Mac</Link></li>
                                        <li><Link href="">iPad</Link></li>
                                        <li><Link href="">iPhone</Link></li>
                                        <li><Link href="">Apple Watch</Link></li>
                                        <li><Link href="">AirPods</Link></li>
                                        <li><Link href="">TV & Home</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">Explore Accessories</li>
                                        <li><Link href="">Made by Apple</Link></li>
                                        <li><Link href="">Beats by Dr. Dre</Link></li>
                                        <li><Link href="">AirTag</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3"></div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </li>

                    {/* Support */}
                    <li className={NavbarCss.supp}><Link href='#'>Support</Link>
                        <div className={navbarChange ? `${NavbarCss.suppDropScroll}` : `${NavbarCss.suppDrop}` }>
                            <div className="row">
                                <div className="col-3">
                                    <ul className={NavbarCss.suppFirst}>
                                        <li className="mb-4">Explore Support</li>
                                        <li><Link href="">Explore Support</Link></li>
                                        <li><Link href="">iPhone</Link></li>
                                        <li><Link href="">Mac</Link></li>
                                        <li><Link href="">iPad</Link></li>
                                        <li><Link href="">Apple Watch</Link></li>
                                        <li><Link href="">AirPods</Link></li>
                                        <li><Link href="">TV & Home</Link></li>
                                        <li><Link href="">Music</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">Get Help</li>
                                        <li><Link href="">Community</Link></li>
                                        <li><Link href="">Check Coverage</Link></li>
                                        <li><Link href="">Repair</Link></li>
                                        <li><Link href="">Contact Us</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li className="mb-4">Helpful Topics</li>
                                        <li><Link href="">Get AppleCare+</Link></li>
                                        <li><Link href="">Apple ID & Password</Link></li>
                                        <li><Link href="">Billing & Subscriptions</Link></li>
                                        <li><Link href="">Find My</Link></li>
                                        <li><Link href="">Accessibility</Link></li>
                                    </ul>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className={NavbarCss.navCart}>
                    <li><BiSearch /></li>
                    <li><Link href="/cart"><BiShoppingBag /><sup>{items.length}</sup></Link></li>
                    <li onClick={() => setResNev(!resNav)}> {crossIcon ? <LiaTimesSolid className={NavbarCss.crossMenu} /> : <TbMenu className={NavbarCss.resMenu} />} </li>
                </ul>

            </div>
                <div className={resNav ? `${NavbarCss.responsiveNav}` : `${NavbarCss.responsiveNav_hide}` }>
                    <ul>
                        <li><Link href="">Store</Link></li>
                        <li><Link href="">Mac</Link></li>
                        <li><Link href="">iPad</Link></li>
                        <li><Link href="">iPhone</Link></li>
                        <li><Link href="">Watch</Link></li>
                        <li><Link href="">Vision</Link></li>
                        <li><Link href=''>AirPods</Link></li>
                        <li><Link href=''>TV & Home</Link></li>
                        <li><Link href=''>Intertainment</Link></li>
                        <li><Link href=''>Accessories</Link></li>
                        <li><Link href=''>Support</Link></li>
                    </ul>
                </div>
        </>
    )
}

export default Navbar