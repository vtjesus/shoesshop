

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface FeaturedProps {
    image1: string,
    image2: string,
}

const Featured: React.FC<FeaturedProps> = ({image1, image2}) => {
  return (
    <section id='featured'>
        <div className="md:flex h-auto overflow-hidden">
            <div className='relative'>
                <Link href='/products'>
                    <Image src={image1} alt='Nike KD15' width={1000} height={700}/>
                </Link>
                
                <div className='absolute bottom-4 right-4 bg-black bg-opacity-50 p-2'>
                    <p className='text-white font-bold'>Kevin Durant KD15</p>
                    <Link href='/products' className='mx-auto text-white rounded-full font-light hover:underline'>Shop Nike</Link>
                </div>
                
            </div>
            <div className='relative'>
                <Link href='/products'>
                    <Image src={image2} alt='Vans Suede olive' width={1000} height={400}/>
                </Link>
                <div className='absolute bottom-4 right-4 bg-black bg-opacity-50 p-2'>
                    <p className='text-white font-bold'>Suede Canvas Olive</p>
                    <Link href='/products' className='mx-auto text-white rounded-full font-light hover:underline'>Shop Vans</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured
