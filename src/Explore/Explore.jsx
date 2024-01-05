import Expimg from '../Componets/Expimg/Expimg'
import  './Explore.css'
import imgexppp from '../images/e1.png'
import imgex22 from '../images/e2.png'

const Explore = () => {
  return (
    <div className='Explore'>
<Expimg  img={imgexppp} title="Promotion" para="Explore Nature"/>
<Expimg  img={imgex22} title="Promotion" para="Explore Cites"/>
    </div>
  )
}

export default Explore