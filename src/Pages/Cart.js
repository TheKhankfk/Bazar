import React, { useEffect, useState } from 'react'
import CartItem from '../Components/CartItem'
import { ToastContainer, Zoom, toast } from "react-toastify"
import { useSelector } from 'react-redux'
const Cart = () => {
  const productsData = useSelector((state) => state.bazar.productsData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [payNow,setPayNow] =useState(false)
  
  const [totalamt,setTotalAmt] =useState("");
 const handlecheckout = () =>{
  if(userInfo){
   setPayNow(true)
  }
  else{
    toast.error("Please sign in to checkout")
  }
 }
  useEffect(()=>{
  let price =0
  productsData.map((item)=>{
    price += item.price * item.quantity;
    return price
  });
  setTotalAmt(price)
  },[productsData])

  return (
    <div>
      <img className='w-full h-80 object-cover' 
      src='https://img.freepik.com/premium-vector/online-shopping-digital-technology-with-icon-blue-background-ecommerce-online-store-marketing_252172-219.jpg'
      alt='CartImage' 
      />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
           <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Cart Totals</h2>
            <p className='flex items-center gap-4 text-base'>
            Subtotal{" "}
            <span className='font-serif text-3xl font-thin    '>
              ${  Math.round(totalamt) }
            </span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping{" "}
              <span>
              G-02 Hexagon Apartments Inner circle Whitefield Bangalore 560066  
              </span>
            </p>
           </div>
           <p className='font-semibold flex justify-between mt-6'>
           Total <span className='text-5xl font-semibold text-red-500' >${  Math.round(totalamt) }</span>
           </p>
           <button onClick={handlecheckout} className='text-base bg-black shadow-indigo-500/40
            text-white w-full my-4 py-3 hover:bg-gray-700 duration-300' >Proceed to checkout
            </button>
       
        </div>
      </div>
      <ToastContainer position="top-left" autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
    </div>
  )
}

export default Cart
