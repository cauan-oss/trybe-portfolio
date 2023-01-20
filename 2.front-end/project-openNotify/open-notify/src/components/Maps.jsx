import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const center = [-24.32419898243478, -50.62178538144723]

function Map() {
  return (
    <MapContainer 
    center={ center }
    zoom={10}
    style={{ width: '100vw', height: '100vh' }}>

      <TileLayer url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=ntbnWjfiyNXmLShDq71k'
    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'/>
    </MapContainer>
  );
}

export default Map;
