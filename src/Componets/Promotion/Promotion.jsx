import   './Promotion.css'
import imgpoom from '../../images/promotion_img.png'
const Promotion = () => {
  return (
    <div className='mainPromotion'>
<div className="Promotion1">
<div className="title11">
        <h3>Promotion</h3>
        <h1>We Provide You Best Europe Sightseeing Tours</h1>
        <div>
            <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae 
                in maxime quasi aut ducimus illum aut optio quibusdam!</p>
        </div>
       
    </div>
    
    <button className='btnpromo'>View Packages</button>
</div>
<div className="Promotion2">
    <img src={imgpoom} alt=""  className='imgpromot'/>
</div>
    </div>
  )
}

export default Promotion