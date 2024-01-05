import React, { useState } from 'react'
import Footer from '../Componets/Footer/Footer'
import Header from '../Componets/Header/Header'
import Imghome from "../images/header-bg.png"
const Services = () => {
  let ReplaceFont = 'fontchange'
  const [img, setImg] = useState(Imghome);
  return (
    
    <div>
        <Header
        title="Services"
        img={img}
        ReplaceFont={ReplaceFont}
      />
      <Footer />
    </div>
  )
}

export default Services