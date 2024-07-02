import React from 'react'
import { bazaar, bz, cart} from '../Assets/index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  const productsData = useSelector((state) => state.bazar.productsData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
    console.log(productsData)
  return (
    <div className='w-full h-20 bg-gradient-to-r from-cyan-100 to-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
         <Link to="/">
         <div>
            <img className='w-24' src={bz} alt='logoDark' />
         </div>
         </Link>
         <div className='flex items-center gap-8'>
            <ul className='flex items-center gap-8'>
                <li className='text-base text-black font-bold hover:text-red-600
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-700'>Home</li>
                <li className='text-base text-black font-bold hover:text-red-600
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-700'>Pages</li>
                <li className='text-base text-black font-bold hover:text-red-600
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-700'>Shop</li>
                <li className='text-base text-black font-bold hover:text-red-600
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-700'>Element</li>
                <li className='text-base text-black font-bold hover:text-red-600
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-700'>Blog</li>
            </ul>
          <Link to ="/Cart" >
            <div className='relative '>
              <img 
                className=' cursor-pointer hover:bg-red-900' width='30px' src={cart} alt='' />
                <span className='relative w-6 bottom-10 right-1 text-sm flex justify-center font-bold opacity-55 text-blue-800 hover:opacity-90 '>
                {productsData.length} 
               </span>
             </div>
          </Link>
           <Link to="/Login">
           <img className='w-8 h-8 rounded-full'
            src={userInfo?userInfo.image : "https://th.bing.com/th?id=OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} 
            alt='' />
           </Link>
           {
            userInfo && <p className='text-base font-semibold underline underline-offset-2'>{userInfo.name}</p>
           }
         </div>
      </div>
    </div>
  )
}

export default Header
