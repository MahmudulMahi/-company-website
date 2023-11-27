import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [23.8103, 90.3613]; // Dhaka Mirpur 1 coordinates

  return (
 <div className='mt-7'>
     <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Dhaka Mirpur 1 <br /> You can add more details here.
        </Popup>
      </Marker>
    </MapContainer>
 </div>
  );
};

export default MapComponent;
