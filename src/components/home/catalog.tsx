'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Catalog = () => {
    const [isHovered, setHovered] = useState<number | null >(null)

    const images = [
        {image1: 'https://sccy794tycp3utm5.public.blob.vercel-storage.com/home/AIR+JORDAN+1+MID-R3RzBrgfqGpPYEWID4SGC6sM4cAZ7b.jpg', image2: 'https://sccy794tycp3utm5.public.blob.vercel-storage.com/home/AIR+JORDAN+1+MID+2-dnQ7fpcf78vCS7Sn5dABREmbCwkjxP.jpg', product: 'Air Jordan 1 Mid'},
        {image1: 'https://sccy794tycp3utm5.public.blob.vercel-storage.com/home/NIKE+SB+DUNK+LOW+PRO-nLPwiQLCvnJwf2sZX2CjYMChdfrzK7.jpg', image2: 'https://sccy794tycp3utm5.public.blob.vercel-storage.com/home/NIKE+SB+DUNK+LOW+PRO+2-neQtKW7BM2dDh9t2UaEQYNpAwxGlKF.jpg', product: 'Nike SB Dunk Low Pro'},
        {image1: 'https://sccy794tycp3utm5.public.blob.vercel-storage.com/home/NIKE+ZOOM+PEGASUS+41+CHIEFS-a3QzOpGHpi6gy8BBPNcnPs91KzSR4P.png', image2: 'https://sccy794tycp3utm5.public.blob.vercel-storage.com/home/NIKE+ZOOM+PEGASUS+41+CHIEFS+2-Da9cEf94FrTUOv2pd6tHgAw7riDJUM.png', product: 'Nike Pegasus 41 NFL Kansas City Chiefs'},
        {image1: 'https://sccy794tycp3utm5.public.blob.vercel-storage.com/home/G.T.+CUT+3+OLY-HXNMNpV2IG4XdvDox9BlzAKFXbepTB.jpg', image2: 'https://sccy794tycp3utm5.public.blob.vercel-storage.com/home/G.T.+CUT+3+OLY+2-QfFSARhZy3sV8R625nMaIYJdvV9RT9.png', product: 'Nike G.T. Cut 3 Electric'},
        {image1: 'https://sccy794tycp3utm5.public.blob.vercel-storage.com/home/AIR+JORDAN+1+RETRO+HIGH+OG-sSREcqjAv6zOWWk4FfLxo8vbz2IVN7.jpg', image2: 'https://sccy794tycp3utm5.public.blob.vercel-storage.com/home/AIR+JORDAN+1+RETRO+HIGH+OG+2-OhzTFeGi2QQDguq4Fc7P5JSpqCZ1TU.jpg', product: 'Air Jordan 1 Retro High OG "Midnight Navy"'},
        {image1: 'https://sccy794tycp3utm5.public.blob.vercel-storage.com/home/WMNS+AIR+JORDAN+1+MID-x33NcJLHWCMZglwKZCxQ1EMvCtvEtZ.jpg' , image2: 'https://sccy794tycp3utm5.public.blob.vercel-storage.com/home/WMNS+AIR+JORDAN+1+MID+2-STTiNzoTHZSi6DIwULnnq3f9K1Huxo.jpg', product: 'Air Jordan 1 Mid'}
    ]

  return (
    <>
        <div className='relative px-4'>
            <div className='text-center my-6'>
                <h2 className='text-3xl font-extrabold'>Our New Arrivals</h2>
                <p className='text-xl font-bold'>Check them out!</p>
            </div>
            
            
            <div className='md:flex items-center mx-2 group mb-4'>
                {images.map((image, index ) => {
                    return (
                    <Link href='/products' key={index}>
                        <div key={index} className='relative hover:z-10' 
                            onMouseEnter={() => setHovered(index)} 
                            onMouseLeave={() => setHovered(null)}>

                            {/* Hovered */}
                            <div className={`absolute mx-auto text-white bg-black bg-opacity-50 font-semibold p-2 transition-opacity duration-200 ${isHovered === index ? 'z-20 opacity-100' : 'z-20 md:z-0 md:opacity-0'}`}>
                                <p>{image.product}</p>
                            </div>
                            
                            <Image src={image.image2} alt='AIR JORDAN 1 MID' width={1000} height={1000}
                            className={`md:absolute transition-all duration-200 transform group-hover:brightness-50 overflow-hidden object-cover
                                ${isHovered === index ? 'opacity-100 !brightness-100 scale-110 rounded-md' : 'md:opacity-0 opacity-100' }`}/>
                            {/* Default */}
                            <Image src={image.image1} alt='AIR JORDAN 1 MID' width={1000} height={1000}
                            className={`transition-all duration-200 transform group-hover:brightness-50 hover:!brightness-100 object-cover hidden md:block
                                ${isHovered === index ? 'opacity-0' : 'opacity-100'}` }/>
                        </div>
                    </Link>
                        
                    )
                })}
            </div>
        </div>
        
    </>
    
  )
}

export default Catalog