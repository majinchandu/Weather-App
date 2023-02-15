// import logo from './logo.svg';
import { useEffect,useState } from 'react';
import './App.css';
import Description from './Description';

// import {GetFormattedWeatherData} from "./WeatherService"

function App() {
  var test = 12.520;
  console.log(Number(test).toFixed(2));
  const [text, setText] = useState("")
  const [City, setCity] = useState("")
  const [Humidity, setHumidity] = useState(null)  
  const [Pressure, setPressure] = useState(null)  
  const [Min, setMin] = useState(null)  
  const [Max, setMax] = useState(null)  
  const [Temp, setTemp] = useState(null)  
  const [FeelsLike, setFeelsLike] = useState(null)  
  const [Iconphoto, setIconphoto] = useState('http://openweathermap.org/img/wn/10d@2x.png')
  const [tempType, settempType] = useState(null)
  const [country, setcountry] = useState(null)
  const [units, setunits] = useState("metric")
  const [speed, setspeed] = useState(null)
  // const [timezoneIn, settimezoneIn] = useState(null)
  // const [dtIn, setdtIn] = useState(null)
  // const [time, settime] = useState(null)
  const HandleOnChange = (event) =>{
    setText(event.target.value)
  } 
// const HandleEnter=()=>{
//   var wage = document.getElementsByClassName("wage");
//   wage.addEventListener("keydown", function (e) {
//     if (e.code === "Enter") { 
//         GetFormattedWeatherData();
//     }
// });
// }

  function changeimage(){
    if (units==='metric' && Temp < 20 ) {
      return 'https://cdn.pixabay.com/photo/2013/01/24/01/57/winter-75946_960_720.jpg'
    }
    if (units==='metric' && Temp > 20 ) {
      return 'https://cdn.pixabay.com/photo/2017/06/11/02/05/wheat-2391348__340.jpg'
    }
    if (units==='imperial' && Temp < 68 ) {
      return 'https://cdn.pixabay.com/photo/2013/01/24/01/57/winter-75946_960_720.jpg'
    }
    if (units==='imperial' && Temp > 68 ) {
      return 'https://cdn.pixabay.com/photo/2017/06/11/02/05/wheat-2391348__340.jpg'
    }
  }
  async function GetFormattedWeatherData(){
    const API_KEY = '051b2e5a67d2f0cbe81faea582240db4'
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=${units}`
    const res = await fetch(URL);
    const data = await res.json(); 
    setCity(text)
    setHumidity(data.main.humidity)
    setPressure(data.main.pressure)
    setMin(data.main.temp_min)
    setMax(data.main.temp_max)  
    setTemp(data.main.temp)
    setFeelsLike(data.main.feels_like)
    setIconphoto(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)  
    console.log(Iconphoto)
    settempType(data.weather[0].description)
    setcountry(data.sys.country)
    setspeed(data.wind.speed)
    // settimezoneIn(data.timezone)
    // setdtIn(data.dt)
   

  // let d = new Date()
  // let localTime = d.getTime()
  // let localOffset = d.getTimezoneOffset() * dtIn
  // let utc = localTime + localOffset
  // var Cityname = utc + (1000 * timezoneIn)
  // let nd = new Date(Cityname)
  // let hour = (nd.getHours());
  // var hours = time.getHours();
  // if (hour<12) {
  //   hour=hour+9
  // }
  // if (hour>12) {
  //   // hour=hour10
  //   hour = hour + 1
  // } 

  // let minutes = nd.getMinutes();
  // let ampm = hour >= 12 ? 'pm' : 'am';


  // let weekday = nd.toLocaleString('default', { weekday: 'long' });
  // let month = nd.toLocaleString('default', { month: 'short' });
  // let date = nd.getDate();
 
  // settime(`${hour} : ${minutes} ${ampm} - ${weekday} , ${month} ${date}`)
  };


   

  function changeunits(){
    if (units==="imperial") {
        setunits("metric")
    }
    else{
      setunits("imperial")
    }
  }

  
  
  // Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before.
  useEffect(()=>{
    GetFormattedWeatherData();
    // HandleEnter();
  })
  
  return (
    <div className='App' style={{ backgroundImage: `url(${changeimage()})`}}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section_inputs'>
            <input type='text' name='city' placeholder='enter city...' value={text} onChange={HandleOnChange} className="input" />
            <button onClick={changeunits}>{units==="metric"?"F":"C"}</button>
            {/* onChange={HandleOnChange} */}
          </div>
          <div className='section section_temperature'>
            <div className='icon'>
              <h3 id='cityname'>{City} , {country}</h3>
              <img src={Iconphoto} alt='iconphoto' id='iconphoto' onchange={GetFormattedWeatherData}  />
              <h3>{tempType}</h3>
            </div>
            <div className='temperature'>
              <h1>{Temp}°{units==="metric"?"C":"F"}</h1>
              {/* <h4 id='time_date'>{time}</h4> */}
            </div>
            
            {/* °{units==="metric"?"C":"F"} */}

          </div>
          <Description Humidity = {Humidity} Pressure = {Pressure} Min = {Min} Max = {Max} FeelsLike = {FeelsLike}  units={units} speed = {speed} /> 
        </div>
      </div>

    </div>
  );
}

export default App;
