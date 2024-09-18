import React from 'react'
import Image from 'next/image'

import { useCart } from '@/context/cartContext'

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    quantity: number;
  }

const CartItem = () => {
    const {cart, removeFromCart} = useCart()



  return (
    <div className='m-2 p-4 relative rounded-md h-full'>
        <div className=''>
        {cart.map(product => {
            return (
                    <div key={product.id} className='my-2'>
                        <div className='grid grid-cols-2 gap-y-2 items-center bg-slate-100 p-2'>
                            <Image src={`${product.image}`} alt="Shoes" width={100} height={100} />
                            <div>
                                <h1 className='font-bold text-sm'>{product.name}</h1>
                                <p className='text-sm'>{product.category}</p>
                                <p className='font-semibold'>${product.price}</p>
                                <div className='flex justify-between'>
                                    <p className='text-sm'>Quantity: {product.quantity}</p>
                                    <button className='text-red-600 text-xs' onClick={() => removeFromCart(product.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
        )})}
        </div>
        
    </div>
  )
}

export default CartItem