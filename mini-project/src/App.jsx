import { useState } from 'react'
import './App.css'
import SearchBox from './components/SearchBox'
import InfoBox from './components/InfoBox'
import winterImage from './assets/Winter4.jpg'
import hotImage from './assets/download.jpg'
import rainImage from './assets/rain.jpg'
import def from './assets/default2.jpg'

function App() {
  const [city, setCity] = useState("")
  const [info, setInof]=useState({})
  const [error, setError]=useState(false)
  let style = {
    background:  info.clouds > 80 ? `url(${rainImage})` : info.temp < 15 ? `url(${winterImage})` : info.temp > 15 ? `url(${hotImage})`:  `url(${def})`,
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
};

  
  

  async function getWether(){
     try {
      let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e12e18e7c4ebbf4aca7bc90669ff2bde&units=metric`)
      let jsonRes=await response.json()
      setInof({...info,
  
          temp:jsonRes.main.temp,
          temp_max:jsonRes.main.temp_max,
          temp_min:jsonRes.main.temp_min,
          humidity:jsonRes.main.humidity,
          feels_like:jsonRes.main.feels_like,
          name:jsonRes.name,
          clouds:jsonRes.clouds.all,
          sun_set:jsonRes.sys.sunset,
          sun_rise:jsonRes.sys.sunrise,
          country:jsonRes.sys.country,
          desc:jsonRes.weather[0].description,
          icon:jsonRes.weather[0].icon,
  
      })
     
     
      setCity('')
      
     } catch (error) {
      setError(true)
     }

  
}
function cityInfo(event){

    setCity(event.target.value)
    setError(false)

 
}


  return (
    <>
    <div style={style} className="app">
    <SearchBox city={cityInfo} getInfo={getWether} cityN={city}/>
    {error&&<p style={{color:'red',marginTop:'10px'}}>No Such place found</p>}
    <InfoBox info={info}/>
    </div>
  

    </>
  )
}

export default App
