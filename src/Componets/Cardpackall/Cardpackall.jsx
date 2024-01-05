import './Cardpackall.css'
import { FaStar } from 'react-icons/fa'

const Cardpackall = (props) => {
  return (
    <div className='Cardpackall'>

      <div className="imgpack">
        <img src={props.cardinforma.cardpackimg} alt="" />
        <div className='underimg'>
          <p>{props.cardinforma.day},{props.cardinforma.month}{props.cardinforma.year}</p>
          <p>{props.cardinforma.numberpeople}+poeple</p>
        </div>
      </div>

      <div className='contentpack'>
        <h4>{props.cardinforma.country}</h4>
        <p className='pcardText'>{props.cardinforma.cardText}</p>
        <div className='ratingdolar'>
          <p>{props.cardinforma.dolar}$</p>
          <p> <FaStar className='staricon'/>{props.cardinforma.rate}</p>
        </div>
      </div>


    </div>
  )
}

export default Cardpackall