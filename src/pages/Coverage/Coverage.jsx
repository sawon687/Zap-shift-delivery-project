import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'


const Coverage = () => {
   
    const [dataService,setDataService]=useState([])
    const position = [23.8103, 90.4125]; // Default center (Dhaka, Bangladesh)
    const mapRef=useRef()

    useEffect(()=>{
        axios('warehouses.json').then(res=>{
            setDataService(res.data)
        })
    },[])
    
    const handleSearch=(e)=>{
        e.preventDefault()
        console.log(e.target.search.value)
        const searchText=e.target.search.value.toLowerCase()

        const distice=dataService.find(service=> service?.district?.toLowerCase().includes(searchText))
        if(distice) {
           

            const coord=[distice.latitude,distice.longitude]
             console.log(distice.latitude,distice.longitude)
             mapRef.current.flyTo(coord,14)
        }

    }

    console.log(dataService)
    return (
        <div className='w-7xl mx-auto my-10 space-y-5  bg-white p-10  rounded-2xl'>
                <h1 className='text-5xl font-bold '>We are available in 64 districts</h1>
              <div className=' w-full space-y-5 '>

            <form onSubmit={handleSearch} >
               <label className="input  rounded-full">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" name='search' />
  
</label>

         </form>
         <h1 className='text-2xl font-bold'>We deliver almost all over Bangladesh</h1>
         
          <div className='h-[800px] '>
              <MapContainer ref={mapRef}  center={position} className='h-full' zoom={8} scrollWheelZoom={false}>
                 <TileLayer
      attribution='&copy; OpenStreetMap  <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     {
         dataService?.map((data,index)=><Marker key={index} position={[data?.latitude, data?.longitude]}>
        <Popup>
            
                <strong>{data.district}</strong><br />
               Service Area { data?.covered_area?.join(' ,')}
            
        </Popup>
     </Marker>)
     }
            </MapContainer>
          </div>
        </div>
        </div>
    );
};

export default Coverage;