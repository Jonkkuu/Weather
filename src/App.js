import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import weather from './components/Weather';
import Weather from './components/Weather';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const ICON_URL = 'http://openweathermap.org/img/wn/'

function App() {

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude)
      }, (error) =>{
      alert(error);
    })
  }
  else{
    alert('Your browser does not support geolocation!')
  }
},[])
 
  
  return (
  <div className='content'>
  <h3>Your position</h3>
 <p>
  {lat.toFixed(3)},
  {lng.toFixed(3)}
 </p>
 <Weather lat={lat} lng={lng} />
 </div>
  )
}
export default App;
