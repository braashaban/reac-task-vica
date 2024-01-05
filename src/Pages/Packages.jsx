import { useState } from 'react'
import Footer from '../Componets/Footer/Footer'
import Header from '../Componets/Header/Header'
import PackagesCard from '../Componets/PackagesCard/PackagesCard'
import ImgPackages from "../images/packages-bg.png"
const Packages = () => {
  const [img, setImg] = useState(ImgPackages);
  return (
    <>
    
    <Header   title="Packages" img={img} />
<PackagesCard />
<Footer />
</>
  )
}

export default Packages