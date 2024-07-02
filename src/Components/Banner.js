import React, { useState } from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Banner = () => {
    const [currentslide,setCurrentSlide] =useState(0)
    const data = [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/175a1648955737.58d0cd1a60fff.jpg",
        "https://static.vecteezy.com/system/resources/previews/000/175/898/original/vector-super-offer-advertising-banner-template-with-colorful-waves.jpg",
        "https://static.vecteezy.com/system/resources/previews/000/175/737/original/advertising-sale-banner-design-with-colorful-background-vector.jpg" ,
        "https://i.pinimg.com/originals/ee/53/93/ee539363ecc7cbc59d421fc55d4601f8.jpg" ,
        
    ]
const prevSlide=()=>{
setCurrentSlide(currentslide===0?3:(prev)=>prev-1)
}
const nextSlide=()=>{
    setCurrentSlide(currentslide===3?0:(prev)=>prev+1)
}

  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-[650px] relative' >
        <div style={{transform:`translateX(-${currentslide * 100}vw )`}} className='w-[400vw] transition transform duration-1000 h-full flex'>
            <img 
            className='w-screen h-full object-cover' 
            src={data[0]} 
            alt='one' 
            Loading='priority' 
            />
            <img 
            className='w-screen h-full object-cover' 
            src={data[1]} 
            alt='one' 
            Loading='priority' 
            />
            <img 
            className='w-screen h-full object-cover' 
            src={data[2]} 
            alt='one' 
            Loading='priority' 
            />
            <img 
            className='w-screen h-full object-cover' 
            src={data[3]} 
            alt='one' 
            Loading='priority' 
            />
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
            <div onClick={prevSlide} className='w-16 h-16 rounded-full bg-red-500 border-gray-700 flex items-center justify-center hover: cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-800 duration-300'>
            <FaAngleDoubleLeft />
            </div>
            <div onClick={nextSlide} className='w-16 h-16 rounded-full bg-red-500 border-gray-700 flex items-center justify-center hover: cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-800 duration-300'>
            <FaAngleDoubleRight />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
