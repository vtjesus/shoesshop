"use client"

import React, {useEffect, useState, useRef} from 'react'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

//components
import Cart from './cart';

import { useCart } from '@/context/cartContext';

const Navbar: React.FC  = () => {
    const [isMobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false)
    const [isCartOpen, setCartOpen] = useState<boolean>(false)

    const cartRef = useRef<HTMLDivElement>(null);

    const {cart} = useCart()

    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
            if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
              setCartOpen(false); // Close the cart when clicking outside
            }
          };
      
          // Add event listener to the document
          document.addEventListener("mousedown", handleClickOutside);
      
          // Cleanup function to remove event listener when the component is unmounted
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };

    },[isCartOpen, cartRef])

      
  return (
    <>
        {/* Desktop View */}
        <section id="desktop" className='hidden md:block md:sticky md:top-0 md:bg-white z-40 drop-shadow-sm text-black'>
            <div  className='grid grid-cols-3 p-4'>
                <h1 className='text-2xl font-bold'>
                    <a href='/'>Shoe Store</a>
                </h1>
                <nav className=''>
                <ul className='flex justify-center'>
                    <li className='mx-2'>
                        <a href="/">Home</a>
                    </li>
                    <li className='mx-2'>
                        <a href="/products">Products</a>
                    </li>
                    <li className='mx-2'>
                        <a href="/about">About</a>
                    </li>

                </ul>
                </nav>
                <div className='flex justify-end'>
                    <button >
                    <LiaShoppingBagSolid className='text-2xl' onClick={() => setCartOpen(true)}/>
                    {cart.length > 0 && <div className='w-2 h-2 absolute bg-red-500 rounded-full '/>}
                </button>
                </div>
                
            </div>
        </section>

        {/* Mobile View */}
        <section id="mobile" className="md:hidden sticky top-0 md:bg-transparent bg-white text-black z-30">
            <div className={`flex relative p-4 items-center`}>
                <h1 className="text-2xl font-bold ">Shoe Store</h1>
                <div className="flex absolute right-16" >
                    <LiaShoppingBagSolid className="text-2xl font-semibold" onClick={() => setCartOpen(true)}/>
                    {cart.length > 0 && <div className='w-2 h-2 absolute bg-red-500 rounded-full right-0'/>}

                </div>
                <button className="text-3xl absolute right-6" onClick={() => setMobileMenuOpened(true)}
                >
                    <IoMenu />
                </button>
            </div>
            
            {/* When Mobile Menu is opened this darkens the background */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isMobileMenuOpened ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileMenuOpened(false)}  // Clicking the overlay will close the menu
            ></div>

            <div className={`fixed top-0 right-0 w-3/5 h-screen bg-white text-black transform transition-transform duration-300 ease-in-out z-40 ${isMobileMenuOpened ? "translate-x-0" : "translate-x-full"}`}>
                <div className="w-full flex justify-end px-6 py-4">
                <button className="text-3xl" onClick={() => setMobileMenuOpened(false)}>
                    <IoClose />
                </button>
                </div>

                <nav className="flex px-2 py-6">
                    <ul className="text-3xl font-semibold grid grid-cols-1 gap-y-4">
                        <li className="mx-2">
                            <a href="/">Home</a>
                        </li>
                        <li className="mx-2">
                            <a href="/products">Products</a>
                        </li>
                        <li className="mx-2">
                            <a href="/about">About</a>
                        </li>

                    </ul>
                </nav>
            </div>
        </section>
        



    <section id='cart' ref={cartRef} className={`fixed bg-white shadow-left-side w-full sm:w-3/6 md:w-3/5 lg:w-1/4 xl:w-1/4 h-screen right-0 transform transition-transform duration-300 ease-in-out z-50 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
            <Cart closeCart={() => setCartOpen(false)}/>
        </section>
    </>
  )
}

export default Navbar