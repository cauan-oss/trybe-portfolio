import React from 'react';
import { useEffect } from 'react';
import { MapContainer, tileLayer } from 'react-leaflet';
import 'leaflet/dist/'
import './App.css';
import useFetch from './hooks/useFetch';

const center = [-24.32649081344886, -50.63315785511293]

function App() {
   const[locale, error, loading] = useFetch();

  const testFunc = async () => {
    const data = await fetch('http://api.open-notify.org/iss-now.json')
    const response = await data.json()
    console.log(response);
  }

  testFunc();
  return (
 <MapContainer center={ center }
 zoom={10}
 style={{ height: '100vw', width: '100vh'  }}>
  
 </MapContainer>
  );
}

export default App;
