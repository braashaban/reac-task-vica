import './TrendAbout.css'
import Trendimg from '../../images/TourPlans-img.png'
const TrendAbout = () => {
    return (
        <div className='TrendAbout'>
            <div className="Trendscetion1">
                <img src={Trendimg} alt="" className='Trendimg11' />
            </div>

            <div className="Trendscetion2">
                <div className="title11">
                    <h3>trend</h3>
                    <h1>We Provide You Best Europe Sightseeing Tours</h1>
                    <div>
                        <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae
                            in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                    </div>

                </div>
                <div className="tendpersent1">
                    <span> 78%</span>
                    <span> 55%</span>
                </div>

                <div className="tendpersent2">
                    <span> Vacations</span>
                    <span> Honeymoon</span>
                </div>

            </div>
        </div>
    )
}

export default TrendAbout