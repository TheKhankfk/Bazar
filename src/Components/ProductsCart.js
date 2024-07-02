import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import { useDispatch } from "react-redux" 
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../redux/bazarSlice'
import { toast } from "react-toastify"

const ProductsCart = ({product}) => {
  const dispatch =useDispatch()
  const navigate = useNavigate()
  const _id = product.title
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("")
  }
  const rootId = idString(_id)


  const handleDetails = () => {
    navigate(`/product/${rootId}`,{
      state : {
        item: product,
      }
    })
  }
  return (
    <div className='group relative shadow-indigo-500/40'>
      <div onClick={handleDetails} className='w-full h-96 cursor-pointer overflow-hidden'>
        <img
         className='w-full h-full object-cover group-hover:scale-110 duration-500'
         src={product.image} alt='images' />
      </div>
      <div>
        <div className='w-full border-[1px] px-2 py-4'>
        <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-base font-mono font-bold'>
          {product.title.substring(0, 15)}
          </h2>
         </div>
        <div className='flex float-end gap-2 relative overflow-hidden w-28 text-sm'>
          <div className='flex justify-end gap-2 transform group-hover:translate-x-24 transition-transform duration-500' >
             <p className='text-red-600  font-extralight line-through'>${product.oldPrice}</p>
             <p className='font-extrabold '>${product.price}</p>
          </div>
         <p onClick={()=>dispatch(addToCart({
          _id: product._id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
          description: product.description,
         })
        ) && toast.success(`${product.title} is added`)
      }
       className='absolute z-20 w-[100px]
         flex items-center gap-1 top-0 transform
          translate-x-32 group-hover:translate-x-0 transition-transform
         cursor-pointer duration-500'>
          Add to Cart {" "}
          <span>
            <FaArrowCircleRight />
          </span>
          </p>
        </div>
        </div>
      </div>
      
       <div >
       
       </div>
       <div className='absolute top-4 right-0 '>
        {product.isNew && <p className='bg-black text-white font-semibold px-6 py-2'>Sale</p> }
       </div>
      </div>
      { /*
      <ToastContainer containerId="containerB"
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

export default ProductsCart
