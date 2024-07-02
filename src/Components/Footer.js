import React from 'react'
import { Pay, bazaar } from '../Assets'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaPaypal, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaLocationDot, FaPerson } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] font-mono py-20'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4  '>
          <div className='flex flex-col gap-7'>
             <img className='w-32 ' src={bazaar} alt='' />
             <p className='text-white text-lg tracking-wide '> © React.com</p>
             <img className='w-40 h-20' src={Pay} alt='' />
          
          <div className='flex gap-5 py-4 text-white'>
            <FaGithub className='hover:text-white duration-300 cursor-pointer' />
            <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
            <FaFacebook className='hover:text-white duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
          </div>
          </div>
     
       <div>
          <h2 className='text-2xl font-semibold text-white mb-4' >Locate Us</h2>
            <div className='text-base flex flex-col gap-2'>
             <p>Kamil Khan  Bangalore,India</p>
             <p>6362934862</p>
             <p>kamilkfk7@gmail.com</p>
           </div>
     </div>
     <div className='flex items-center flex-col gap-3' >
     <h2 className='text-2xl font-semibold text-white
      mb-4'>Profile</h2> 
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
         <span>
          <FaHome />
        </span> Home</p>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
         <span>
          <FaPaypal />
        </span> Paypal</p>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
         <span>
          <FaLocationDot />
        </span> Location</p>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
         <span>
          <FaPerson />
        </span> my-account</p>
     </div>
    <div className='flex flex-col items-center'>
    <div className='flex  gap-2 w-30 h-30 justify-center'>
      <input className='bg-gray-600 border px-2 py-2 text-sm h-10 text-white' placeholder='Type your Email' type='text' />
      <button>Subscribe</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Footer
