import React from 'react'
import Navebar from './Navebar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'


const DisplayHome = () => {
  return (
    <>
      
      <Navebar />
      <div className=' mb-4'>
        <h1 className=' my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto '>
          {albumsData.map((item, index) => (<AlbumItem key={index} name={index.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>

      </div>
      <div className=' mb-4'>
        <h1 className=' my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto '>
          {} 
        </div>

      </div>
    </>
  )
}

export default DisplayHome
