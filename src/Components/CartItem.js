import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineArrowLeft, MdOutlineClose } from "react-icons/md"
import {  toast } from "react-toastify";
import { decermentQuantity, deleteItem, incrementQuantity, resetCart } from '../redux/bazarSlice';
import {Link} from "react-router-dom"
const CartItem = () => {
    const dispatch =useDispatch()
    const productsData = useSelector((state)=>state.bazar.productsData);
    const [decrement,setDecrement]= useState(1);    

  return (
    <div className='w-2/3 pr-10'>
      <div className='w-full'>
      <h2 className='font-medium text-2xl'>Shopping Cart</h2>
      </div>
      <div className='bg-gradient-to-r from-white to-purple-700'>
        {
            productsData.map((item) =>(  
                <div key={item._id} className='flex items-center justify-between gap-6 mt-6'>
                  <div className='flex bg-gradient-to-r from-red-500 to-pink-500 items-center gap-2'>
                    <MdOutlineClose onClick={() => dispatch(deleteItem(item._id)) & 
                   toast.error(`${item.title} is removed`)
        } 
                   className='text-xl text-gray-600 hover:text-red-500 cursor-pointer duration-300' />
                    <img
                    className='w-32 h-32 object-cover'
                    src={item.image} 
                    alt='ProductImage' />
                    </div>
                    <h2 className='w-52'>{item.title}</h2>
                    <p className='w-10'>${item.price}</p>
                    
            <div className='flex items-center  gap-4 text-sm font-semibold'>
            <button onClick={()=>dispatch(
                decermentQuantity({
                  _id: item._id,
                  title: item.title,
                  image: item.image,
                  price: item.price,
                  description: item.description,
                  quantity: 1
                })
              )
             }
            className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-500
             hover:text-white cursor-pointer duration-300 active:bg-black' >-</button>
            <span>{item.quantity}</span>
            <button onClick={()=>dispatch(
              incrementQuantity({
                _id:item._id,
                title:item.title,
                image:item.image,
                price:item.price,
                quantity: 1,
                description:item.description,
              })
            )} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-500
             hover:text-white cursor-pointer duration-300 active:bg-black'>+</button >
            <p className='w-14 font-light mx-2' >{item.quantity*item.price}</p>
                 </div>
                </div>   
        )
            )
        }
      </div>
      <button onClick={()=>dispatch(resetCart()) 
        & toast.error("Your cart is empty")} 
        className='bg-red-500 text-white mt-9 mx-7 py-3
         px-7 hover:bg-gradient-to-r from-purple-500 to-pink-500 duration-300'>Reset cart
         </button>
         <Link to ="/">
          <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
            <span>
              <MdOutlineArrowLeft />
            </span>
            Go Shopping
          </button>
         </Link>
    </div>
  )
}

export default CartItem
