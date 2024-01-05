
import './Expimg.css'
const Expimg = ({img,title,para}) => {
  return (
    <div className='Expimg'>
        <img src={img} alt="" />
        <div className='contentExp'>
            <p>{title}</p>
            <h2>{para}</h2>
            <button>Explorer now</button>
        </div>
    </div>
  )
}

export default Expimg