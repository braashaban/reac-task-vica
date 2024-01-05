
import videoimg from '../../images/video-banner.png'
import videoplay from '../../images/video-play.svg'
import "./Video.css"
const Video = () => {
  return (
    <div>
        <div className="videoimg">
            <img src={videoimg} alt=""  className='videoplimg'/>
            <img src={videoplay} alt="" className='videoplay' />
        </div>

    </div>
  )
}

export default Video