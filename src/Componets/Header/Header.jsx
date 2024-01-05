import NavBar from '../NavBar/NavBar'
import './Header.css'
/* import imges from "../../images/about-bg.png" */

const Header = (props) => {
  return (
    <header className='header'  style={{ backgroundImage: `url(${props.img})`}}  >
   <NavBar/>

<div className='title'>
{/* className={`title ${props.ReplaceFont}`} */}
    <h2 className={props.ReplaceFont}>
   {props.title}
    </h2>
</div>

    </header>

    
  )
}

export default Header