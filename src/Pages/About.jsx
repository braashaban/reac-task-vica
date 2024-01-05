import React, { useState } from 'react'
import Footer from '../Componets/Footer/Footer'
import Header from '../Componets/Header/Header'
import Promotion from '../Componets/Promotion/Promotion'
import TrendAbout from '../Componets/TrendAbout/TrendAbout'
import Video from '../Componets/Video/Video'
import Imgabout from "../images/about-bg.png"



const About = () => {
  const [img, setImg] = useState(Imgabout);
  return (
    <>
    <Header title="About Us" img={img}    />
<Promotion />
<Video />
<TrendAbout />
<Footer /> 
    </>
  )
}

export default About