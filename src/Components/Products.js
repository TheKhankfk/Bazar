import React from 'react'
import ProductsCart from './ProductsCart'

const Products = ({products}) => {
  return (
    <>
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping Everyday</h1>
        <span className='my-2 w-80 h-[5px] font-semibold bg-black' > </span>
          <p className='my-4 max-w-[700px] text-gray-500 text-center' >Bazaaar is India’s largest online store, offering a wide range of products across various categories.. Started in 2024, Bazaaar has played a significant role in India’s digital commerce revolution, enabling millions of sellers and small businesses to participate in the online marketplace.Happy shopping! 🛒📱💻</p>      
      </div>
    </div>
    <div className='max-w-screen-xl  mx-auto py-1 grid grid-cols-4 gap-10'>
       {products.map((item) =>( 
        <ProductsCart key={item._id} product ={item} />
       ))}
    </div>
    </>
  )
}

export default Products
