'use client'
import React from 'react'
import CartItem from './cartItem'
import { IoClose } from "react-icons/io5";

interface CarProps {
  closeCart: () => void
}

const Cart: React.FC<CarProps> = ({closeCart}) => {

  return (
    <section >
            <div className='flex relative w-full justify-between'>
                <h1 className='text-3xl font-extrabold p-4 mr-auto'>
                    Cart
                </h1>
                <button className="text-3xl ml-auto pr-4" onClick={closeCart}>
                    <IoClose />
                </button>
            </div>
            <div className='overflow-auto h-screen'>
                <CartItem />
            </div>
      </section>
  )
}

export default Cart