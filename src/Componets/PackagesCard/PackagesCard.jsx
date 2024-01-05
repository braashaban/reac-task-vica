import Cardpackall from '../Cardpackall/Cardpackall';
import  './PackagesCard.css'
import imgpack1 from '../../images/city-1.png'
import imgpack2 from '../../images/city-2.png'
import imgpack3 from '../../images/city-3.png'
import imgpack4 from '../../images/city-4.png'
import imgpack5 from '../../images/city-5.png'
import imgpack6 from '../../images/city-6.png'

const PackagesCard = () => {


  const  PackagesData = [
    {
      id: 1,
   cardpackimg: imgpack1, 
   day:27,
   month:"September",
   year:2023,
   numberpeople:30,
   dolar:3000,
    country:"Maldives",
    rate:5.0,
      cardText: "Qui tempore voluptate qui quia commodi rem praesentium alias et"
    },
    {
      id: 2,
   cardpackimg: imgpack2, 
   day:13,
   month:"October",
   year:2023,
   numberpeople:120,
    country:"Switzerland",
    dolar:1290,
    rate:4.9,
      cardText: "Qui tempore voluptate qui quia commodi rem praesentium alias et."
    },
    {
      id: 3,
   cardpackimg: imgpack3,
   day: 2,
   month:'November',
   year:2022,
   numberpeople:139,
    country:"Berlin",
    dolar:2790,
    rate:5.0,
      cardText: "Qui tempore voluptate qui quia commodi rem praesentium alias et."
    },
    {
      id:4,
      cardpackimg: imgpack4, 
      day:14,
      month:"December",
      year:2022,
      numberpeople:50,
      country:"Torronto",
      dolar:110,
      rate:4.0,
      cardText: "Qui tempore voluptate qui quia commodi rem praesentium alias et"
    },
    {
        id:5,
        cardpackimg: imgpack5, 
        day:20,
        month:"September",
        year:2022,
        numberpeople:80,
        country:"Baku",
        dolar:1220,
        rate:4.9,
        cardText: "Qui tempore voluptate qui quia commodi rem praesentium alias et"
      },  {
        id: 6,
     cardpackimg: imgpack6, 
     day:27,
     month:"August",
     year:2022,
     numberpeople:100,
      country:"Chinese",
      dolar:2500,
      rate:5.0,
        cardText: "Qui tempore voluptate qui quia commodi rem praesentium alias et"
      },
      
  ];
  return (

    <div className='PackagesData'>
    <div className="cardpackages">
    {PackagesData.map((data) => {
          return <Cardpackall key={data.id} cardinforma={data} />;
      
        })
     
        }
     

   </div>
    </div>
  )
}

export default PackagesCard