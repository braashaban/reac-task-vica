
import { useState } from 'react'
import Footer from '../Componets/Footer/Footer'
import Header from '../Componets/Header/Header'
import Services from '../Componets/Services/Services'
import Trending from '../Componets/Trending/Trending'
import Explore from '../Explore/Explore'
import Imghome from "../images/header-bg.png"
import "../Pages/Home.css"



const Home = () => {
  let ReplaceFont = 'fontchange'
  const [img, setImg] = useState(Imghome);
  return (
    <div>
      <Header
        title="No matter where you’re going to, 
we’ll take you there"
        img={img}
        ReplaceFont={ReplaceFont}
      />
      <Services />
      <Explore />
      <Trending />
      <Footer />
    </div>
  )
}

export default Home