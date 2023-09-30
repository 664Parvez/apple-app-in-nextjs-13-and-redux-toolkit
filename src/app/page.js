import Image from 'next/image'
import Link from "next/link"
import homeCss from '../styles/home.module.css'
import Container from "../components/Container"

import {BiLogoApple} from "react-icons/bi"

export default function Home() {
  return (
    <>
        <div id={homeCss.hero_section}>
          <div className={homeCss.hero_section_img}>
            <div className="text-center" id={homeCss.hero_content}>
              <h1>iPhone 15 Pro</h1>
              <h4>Titanium. So Strong. So Light. So Pro.</h4>
              <p>Pre order starting at 5:00 a.m. PDT 9:15 available starting 9:22</p>
              <div className="row">
                <div className="col-lg-6 col-md-6 text-md-end">
                  <Link href=""><h5>Learn More</h5></Link>
                </div>
                <div className="col-lg-6 col-md-6 text-md-start">
                  <Link href=""><h5>View Product</h5></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id={homeCss.second_section}>
          <div className={homeCss.second_section_img}>
            <div className="text-center" id={homeCss.second_content}>
              <h2>iPhone 15</h2>
              <h4>New Camera. New Design. New Phoria.</h4>
              <p>Pre order starting at 5:00 a.m. PDT 9:15 available starting 9:22</p>
              <div className="row">
                <div className="col-lg-6 col-md-6 text-md-end">
                  <Link href=""><h5>Learn More</h5></Link>
                </div>
                <div className="col-lg-6 col-md-6 text-md-start">
                  <Link href=""><h5>View Product</h5></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id={homeCss.third_section}>
          <div className={homeCss.third_section_img}>
            <div className="text-center" id={homeCss.third_content}>
              <h2><BiLogoApple /> WATCH</h2>
              <h3>SERIES 9</h3>
              <h4>Smarter. Brighter. Mightier.</h4>
              <p>Available starting 9:22</p>
              <div className="row">
                <div className="col-lg-6 col-md-6 text-md-end">
                  <Link href=""><h5>Learn More</h5></Link>
                </div>
                <div className="col-lg-6 col-md-6 text-md-start">
                  <Link href=""><h5>View Product</h5></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id={homeCss.forth_section}>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div id={homeCss.forth_section_one}>
                <div className={homeCss.forth_section_one_img}>
                  <div className="text-center" id={homeCss.forth_content_one}>
                    <h2><BiLogoApple /> WATCH</h2>
                    <h5>ULTRA 2</h5>
                    <h4>Next Level Adventure</h4>
                    <p>Available starting 9:22</p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 text-md-end">
                        <Link href=""><h6>Learn More</h6></Link>
                      </div>
                      <div className="col-lg-6 col-md-6 text-md-start">
                        <Link href=""><h6>View Product</h6></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div id={homeCss.forth_section_two}>
                <div className={homeCss.forth_section_two_img}>
                  <div className="text-center" id={homeCss.forth_content_two}>
                    <h2>Carbon Neutral</h2>
                    <h4>A First For Apple Watch</h4>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 text-md-end">
                        <Link href=""><h6>Learn More</h6></Link>
                      </div>
                      <div className="col-lg-6 col-md-6 text-md-start">
                        <Link href=""><h6>View Product</h6></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id={homeCss.fifth_section} className='mt-4'>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div id={homeCss.fifth_section_one}>
                <div className={homeCss.fifth_section_one_img}>
                  <div className="text-center" id={homeCss.fifth_content_one}>
                    <h2><BiLogoApple /> WATCH</h2>
                    <h5>ULTRA 2</h5>
                    <h4>Next Level Adventure</h4>
                    <p>Available starting 9:22</p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 text-md-end">
                        <Link href=""><h6>Learn More</h6></Link>
                      </div>
                      <div className="col-lg-6 col-md-6 text-md-start">
                        <Link href=""><h6>View Product</h6></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div id={homeCss.fifth_section_two}>
                <div className={homeCss.fifth_section_two_img}>
                  <div className="text-center" id={homeCss.fifth_content_two}>
                    <h2>Carbon Neutral</h2>
                    <h4>A First For Apple Watch</h4>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 text-md-end">
                        <Link href=""><h6>Learn More</h6></Link>
                      </div>
                      <div className="col-lg-6 col-md-6 text-md-start">
                        <Link href=""><h6>View Product</h6></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id={homeCss.sixth_section} className='mt-4'>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div id={homeCss.sixth_section_one}>
                <div className={homeCss.sixth_section_one_img}>
                  <div className="text-center" id={homeCss.sixth_content_one}>
                    <h2><BiLogoApple /> WATCH</h2>
                    <h5>ULTRA 2</h5>
                    <h4>Next Level Adventure</h4>
                    <p>Available starting 9:22</p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 text-md-end">
                        <Link href=""><h6>Learn More</h6></Link>
                      </div>
                      <div className="col-lg-6 col-md-6 text-md-start">
                        <Link href=""><h6>View Product</h6></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div id={homeCss.sixth_section_two}>
                <div className={homeCss.sixth_section_two_img}>
                  <div className="text-center" id={homeCss.sixth_content_two}>
                    <h2>Carbon Neutral</h2>
                    <h4>A First For Apple Watch</h4>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 text-md-end">
                        <Link href=""><h6>Learn More</h6></Link>
                      </div>
                      <div className="col-lg-6 col-md-6 text-md-start">
                        <Link href=""><h6>View Product</h6></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </>
  )
}
