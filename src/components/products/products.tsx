'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'


import ProductView from './productView'

interface Product {
    id: number
    name: string
    price: number
    image: string
    category: string
    quantity: number
    description: string
  }

  interface ProductProps {
    products: Product[];
  }

const Products: React.FC<ProductProps> = ({products}: ProductProps) => {
    const [isFilteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [order, setOrder] = useState<string>('')
    const [isCategory, setCategory] = useState<string>('all')
    const [selectedProduct, setSelectedProduct] = useState<Product>()
    const [isProductViewOpened, setProductViewOpened] = useState<boolean>(false)

    useEffect(() => {
        setFilteredProducts(products)
    }, [products])

    useEffect(() => {
        if (isProductViewOpened) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
        
        // Cleanup function to re-enable scrolling when the component is unmounted
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isProductViewOpened]);




    const filterByPrice = (products: Product[], order: string): Product[] => {
        // Make a shallow copy of the array to avoid mutating the original array
        const sortedProducts = [...products];
    
        // Implementing bubble sort
        for (let i = 0; i < sortedProducts.length - 1; i++) {
            for (let j = 0; j < sortedProducts.length - i - 1; j++) {
                if (
                    (order === 'high' && sortedProducts[j].price < sortedProducts[j + 1].price) || // For high-to-low
                    (order === 'low' && sortedProducts[j].price > sortedProducts[j + 1].price)   // For low-to-high
                ) {
                    // Swap the products
                    const temp = sortedProducts[j];
                    sortedProducts[j] = sortedProducts[j + 1];
                    sortedProducts[j + 1] = temp;
                }
            }
        }
    
        return sortedProducts;
    };

    const filterProducts = (products: Product[], category: string, order: string) => {
        let filteredProducts: Product[] = [...products]
        if(category !== 'all'){
            filteredProducts = filteredProducts.filter((product) => {
                console.log("product", product.category, "api", category)
                if(product.category === category){
                    return true
                }
            })
            console.log(filteredProducts, category)
        }

        if(order !== 'select'){
            filteredProducts = filterByPrice(filteredProducts, order)   
        }

        setFilteredProducts(filteredProducts)
    }

  return (
    <>
        {isProductViewOpened && (<div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setProductViewOpened(false)}/>)}
        <div className='bg-slate-100 min-h-screen relative'> 
            <div id='filter' className="md:flex p-2 md:items-center bg-white px-4">
                <h1 className='font-semibold mb-1'>Filter:</h1>
                <div className='flex md:mb-0 mb-2 h-full items-center'>
                    <div className='lg:mx-4 flex items-center h-full'>
                        <p className='lg:mr-2'>Brand</p>
                        <select id='category' className='border px-2' onChange={(e) => setCategory(e.target.value)}>
                            <option id='All' value='all'>All</option>
                            <option id='Nike' value='Nike'>Nike</option>
                            <option id='Vans' value='Vans'>Vans</option>
                        </select>
                    </div>
                    <div className='mx-4 flex items-center' defaultValue=''>
                        <p className='mr-2'>Price</p>
                        <select id='category' className='border px-2' onChange={(e) => setOrder(e.target.value)}>
                            <option disabled selected value='select'>Select an Option</option>
                            <option id='Nike' value='high'>Highest to Lowest</option>
                            <option id='Vans' value='low'>Lowest to Highest</option>
                        </select>
                    </div>
                </div>
                
                <button className='bg-black hover:bg-slate-600
                rounded-full px-3 py-1 text-white font-bold text-sm' onClick={() => filterProducts(products, isCategory, order)}>Apply</button>
            </div>
            
            <div className="grid 2xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-5 grid-cols-2 gap-4 p-4 justify-center ">
                {isFilteredProducts.map((product) => (
                <div key={product.id} className="bg-white flex flex-cols justify-center mx-auto" 
                    onClick={() => {
                        setSelectedProduct(product)
                        setProductViewOpened(true)
                    }}>
                    <div className="mx-auto w-full max-w-[200px] h-full flex flex-col justify-between">
                        <Image src={product.image} alt={product.name} width={225} height={220} />
                        <h1 className=" m-1 p-1 font-bold text-sm whitespace-break-spaces">
                                {product.name}
                        </h1>
                        <div className="flex justify-between p-1">
                            <p className='ml-1'>{product.category}</p>
                            <p className='mr-1 font-semibold'>${product.price}</p>
                        </div>

                       
                    </div>
                </div>
                ))}
            </div>

            {(isProductViewOpened && selectedProduct) && (
                <div className="fixed z-50 2xl:w-7/12 w-11/12 h-5/6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-md animate-fadeIn">
                    <ProductView product={selectedProduct} closeProductView={() => setProductViewOpened(false)} />
                </div>
            )}
            
        </div>

        
        
        
    </>
    
  )
}

export default Products