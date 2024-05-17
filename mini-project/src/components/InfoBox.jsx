import winterImage from '../assets/snow.png';
import rainyImage from '../assets/rainy-day.png';
import sunImage from '../assets/sun.png';
import def from '../assets/default1.png';
import './InfoBox.css'
import Detail from './Detail';
export default function InfoBox({ info }) {

    let style={width:'100px', height:'100px'}
  return (
    <div className="infobox">
      <div className="iconbox">
        <div className="temp-detial">
          <span>{info.name}</span>
        <p>{info.temp}&deg;C</p>
        <span>{info.desc}</span>
        </div>
   
      <img style={style} src={info.clouds>80?rainyImage:info.temp<15?winterImage:info.temp>15?sunImage:def} alt="" />
      </div>
       <div className="info">
       
        <Detail text='Country' val={info.country}/>
        <Detail text='Max-Temp' val={info.temp_max}/>
        <Detail text='Min-Temp' val={info.temp_min}/>
        <Detail text='Humidity' val={info.humidity}/>
        <Detail text='Clouds' val={info.clouds}/>
        <Detail text='Feels Like' val={info.feels_like}/>
        

      
    
       </div>
      
    </div>
  );
}
