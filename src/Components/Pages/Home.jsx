import React from 'react'
import Banner from '../Banner/Banner'
import Intro from "../BannerTxt/Intro"
import Images from "../Banner/Images"
import About from "../About/About"
import ChooseusCard from "../About/ChooseusCard"
import Aschistory from "../History/Aschistory"
import Brands from "../Brands/Brands"
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Banner images={Images}/>
      <div className="intro-overlay">
        <Intro images={Images}/>
      </div>
      <div>
      <About/> 
      <ChooseusCard/>
      <Aschistory/>
      <Brands/>
      <Footer/>
      </div>  
    </div>
  )
}

export default Home