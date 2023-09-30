import Container from "./Container"
import Link from "next/link"

import footerCss from "../styles/footer.module.css"

const Footer = () => {
    return(
        <>
            <Container>

                <div id={footerCss.footerUp}>
                    <li>1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.</li>

                    <li>2. Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying Location. Only one Apple Gift Card per eligible Mac or iPad per Qualified Purchaser. Offer subject to availability. While supplies last. View full terms and conditions of offer here.</li>

                    <li>To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.</li>

                    <li>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.</li>

                    <li>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</li>

                    <li>A subscription is required for Apple TV+.</li>

                    <li>Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.</li>
                </div>

                <hr />

                <div className="row" id={footerCss.mainFooter}>
                    <div className="col-lg-3" id={footerCss.wid_20}>
                        <h6><b>Shop and Learn</b></h6>
                        <ul>
                            <li><Link href="">Store</Link></li>
                            <li><Link href="">Mac</Link></li>
                            <li><Link href="">iPad</Link></li>
                            <li><Link href="">iPhone</Link></li>
                            <li><Link href="">Watch</Link></li>
                            <li><Link href="">Vision</Link></li>
                            <li><Link href="">AirPods</Link></li>
                            <li><Link href="">TV & Home</Link></li>
                            <li><Link href="">AirTag</Link></li>
                            <li><Link href="">Accessories</Link></li>
                            <li><Link href="">Gift Cards</Link></li>
                        </ul>

                        <h6><b>Apple Wallet</b></h6>
                        <ul>
                            <li><Link href="">Wallet</Link></li>
                            <li><Link href="">Apple Card</Link></li>
                            <li><Link href="">Apple Pay</Link></li>
                            <li><Link href="">Apple Cash</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3" id={footerCss.wid_20}>
                        <h6><b>Account</b></h6>
                        <ul>
                            <li><Link href="">Manage Your Apple ID</Link></li>
                            <li><Link href="">Apple Store Account</Link></li>
                            <li><Link href="">iCloud.com</Link></li>
                        </ul>
                        <h6><b>Entertainment</b></h6>
                        <ul>
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
                    <div className="col-lg-3" id={footerCss.wid_20}>
                        <h6><b>Apple Store</b></h6>
                        <ul>
                            <li><Link href="">Find a Store</Link></li>
                            <li><Link href="">Genius Bar</Link></li>
                            <li><Link href="">Today at Apple</Link></li>
                            <li><Link href="">Apple Camp</Link></li>
                            <li><Link href="">Apple Store App</Link></li>
                            <li><Link href="">Certified Refurbished</Link></li>
                            <li><Link href="">Apple Trade In</Link></li>
                            <li><Link href="">Financing</Link></li>
                            <li><Link href="">Carrier Deals at Apple</Link></li>
                            <li><Link href="">Order Status</Link></li>
                            <li><Link href="">Shopping Help</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3" id={footerCss.wid_20}>
                        <h6><b>For Business</b></h6>
                        <ul>
                            <li><Link href="">Apple and Business</Link></li>
                            <li><Link href="">Shop for Business</Link></li>
                        </ul>

                        <h6><b>For Education</b></h6>
                        <ul>
                            <li><Link href="">Apple and Educations</Link></li>
                            <li><Link href="">Shop for K-12</Link></li>
                            <li><Link href="">Shop for College</Link></li>
                        </ul>

                        <h6><b>For Healthcare</b></h6>
                        <ul>
                            <li><Link href="">Apple in Healthcare</Link></li>
                            <li><Link href="">Health on Apple Watch</Link></li>
                            <li><Link href="">Health Records on iPhone</Link></li>
                        </ul>

                        <h6><b>For Government</b></h6>
                        <ul>    
                            <li><Link href="">Shop for Government</Link></li>
                            <li><Link href="">Shop for Veterans and Military</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3" id={footerCss.wid_20}>
                        <h6><b>Apple Values</b></h6>
                        <ul>    
                            <li><Link href="">Accessibility</Link></li>
                            <li><Link href="">Education</Link></li>
                            <li><Link href="">Environment</Link></li>
                            <li><Link href="">Inclusion and Diversity</Link></li>
                            <li><Link href="">Privacy</Link></li>
                            <li><Link href="">Racial Equity and Justice</Link></li>
                            <li><Link href="">Supplier Responsibility</Link></li>
                        </ul>
                        <h6><b>About Apple</b></h6>
                        <ul>    
                            <li><Link href="">Newsroom</Link></li>
                            <li><Link href="">Apple Leadership</Link></li>
                            <li><Link href="">Career Opportunities</Link></li>
                            <li><Link href="">Investors</Link></li>
                            <li><Link href="">Ethics & Compliance</Link></li>
                            <li><Link href="">Events</Link></li>
                            <li><Link href="">Contact Apple</Link></li>
                        </ul>
                    </div>
                </div>


                <p className="mt-4" id={footerCss.moreWay}>More ways to shop: <Link href="">Find an Apple Store</Link> or <Link href="">other retailer</Link> near you. Or call 1-800-MY-APPLE.</p>
                
                <hr />
                
                <div className="row" id={footerCss.privacySection}>
                    <div className="col-lg-4">
                        <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                            <li><Link href="">Privacy Policy</Link></li>
                            <li><Link href="">Terms of use</Link></li>
                            <li><Link href="">Sales & Refunds</Link></li>
                            <li><Link href="">Legal</Link></li>
                            <li><Link href="">Site Map</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 text-end" id={footerCss.usa}>
                        <Link href="">United State</Link>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Footer