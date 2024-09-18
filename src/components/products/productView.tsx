import React, {useState} from 'react'
import Image from 'next/image';
import { IoClose } from "react-icons/io5";

import { useCart } from '@/context/cartContext';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    quantity: number;
  }
  
  interface ProductViewProps {
    product: Product;
    closeProductView: () => void;
  }

const ProductView: React.FC<ProductViewProps> = ({product, closeProductView}) => {
    const { addToCart } = useCart()

    const [quantity, setQuantity] = useState<number>()

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(e.target.value))
    }

  return (
<>
    <div className='bg-white h-full w-full relative flex flex-col lg:flex-row sm:overflow-scroll lg:overflow-hidden p-2 sm:p-2'>
        <div className='justify-end p-2 lg:hidden flex'>
            <IoClose onClick={closeProductView} className='text-3xl cursor-pointer' />
        </div>
        {/* Image Section */}
        <div className='w-full flex justify-center'>
            <Image
                src={`${product?.image}`}
                alt={`${product?.name}`}
                width={700}
                height={500}
                className='p-2 lg:w-full w-1/2  object-contain'
            />
        </div>
        

        {/* Product Info Section */}
        <div className='h-full w-full p-4'>
            <div className='justify-end p-2 hidden lg:flex'>
                <IoClose onClick={closeProductView} className='text-3xl cursor-pointer' />
            </div>

            <div id='product-info' className='p-2 w-full h-full flex flex-col'>
                <div>
                    <h1 className='text-xl lg:text-3xl font-bold'>{product?.name}</h1>
                    <p className='text-base lg:text-lg'>{product?.category}</p>
                </div>

                <div className='mt-6 lg:mt-10 w-full lg:w-3/4'>
                    <p className='text-sm lg:text-base'>{product?.description}</p>
                </div>

                {/* Price, Quantity, Add to Cart */}
                <div className='mt-4 flex flex-col lg:flex-row items-start lg:items-center'>

                    <p className='text-xl lg:text-2xl font-bold'>${product?.price}</p>

                    <div className='mt-2 lg:mt-0 lg:mx-4 flex items-center'>
                        <label className='mr-2 text-sm lg:text-base'>Quantity</label>
                        <input
                            type="number"
                            className="w-16 text-center border border-gray-300 focus:outline-none"
                            defaultValue={1}
                            value={quantity}
                            onChange={handleQuantityChange}
                            min={1}
                        />
                    </div>

                    <div className='mt-4 lg:mt-0 w-full lg:w-auto flex justify-start lg:justify-end items-center pr-2'>
                        <button className='bg-black hover:bg-slate-400 rounded-full px-4 py-2 text-white font-bold' onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>


    
  )
}

export default ProductView