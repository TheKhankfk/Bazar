//Product.js
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/bazarSlice';
import {  toast } from "react-toastify"

const Product = () => {
  const dispatch = useDispatch()
  const [details,setDetails] = useState({});
  let [baseqty,setBaseQty] = useState(1);
  const Location = useLocation()
  useEffect (()=>{
   setDetails(Location.state.item)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className='grid grid-cols-2' >
      <div className='w-full mx-10 my-10 flex gap-10'>
       <div className='w-3/5 relative'>
         <img
          className='w-[1000px] h-[550px] object-cover'
          src={details.image}
          alt='pimg' />
      </div>
      <div className=' absolute top-4 right-0 '>
        {details.isNew && (
          <p className='bg-black text-white
           font-semibold px-8 py-1' >
            Sale
          </p>
        )}
      </div>
    </div>
    <div className='w-2/5 flex flex-col justify-center gap-12' >
        <div className='flex items-center gap-4 mt-3'>
          <h2 className='text-4xl font-semibold' >{details.title}</h2>
          <div>
            <p className='line-through font-base text-red-400' >
              ${details.oldPrice}
            </p>
            <p className='text-2xl font-medium text-gray-800'>
              ${details.price}
            </p>
          </div>
        </div>
        <div className='flex items-center gap-2 text-base'>
           <div className='flex'>
             <MdOutlineStar />
             <MdOutlineStar />
             <MdOutlineStar />
             <MdOutlineStar />
           </div>
           <p className='text-xs text-gray-500'>1 Customer Review</p>
        </div>
        <p className='text-base text-gray-500' >{details.description}</p>
        <div className='flex gap-4'>
          <div className='w-52 flex items-center justify-between
                      text-gray-500 gap-4 border p-3'>
            <p className='text-sm'>Quantity</p>
            <div className='flex items-center gap-4 text-sm font-semibold'>
            <button onClick={()=>setBaseQty(baseqty ===1 ? (baseqty = 1) : baseqty - 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-500 hover:text-white cursor-pointer duration-300 active:bg-black' >-</button>
            <span>{baseqty}</span>
            <button onClick={()=>setBaseQty(baseqty + 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-500 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button >
            </div>
          </div>
         <div>
         <button onClick={()=>dispatch(addToCart({
          _id: details._id ,
          title: details.title ,
          image: details.image ,
          price: details.price ,
          quantity: baseqty ,
          description :details.description,
         })
        ) & toast.success(`${details.title} is added`)
         } 
         className='bg-black w-[150px] inline text-white py-3 px-6 active:bg-gray-800'>Add to cart</button>
          </div>
          <br />
          <p className='text-base text-gray-500'>Category:<span className='font-medium capitalize'> {details.category}</span> </p> 
        </div>
      </div>
      {/* 
      <ToastContainer containerId="containerC"
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
         */} 
    </div>
  )
}

export default Product
