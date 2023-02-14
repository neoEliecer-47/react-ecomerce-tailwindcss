import CartIcon from '@/components/icons/CartIcon'
import { useState } from 'react'



const DetailsProduct = () => {
    
    const [numero, setNumero] = useState(0)

    const handleChange = () => {

    }

    const handleSum = () => {
        setNumero(numero + 1)
    }


    const handleRest = () => {
        
        if (numero === 0) return setNumero(0)
        setNumero(numero - 1)
    }
    
    
    return (
        <section className="container mx-auto px-4 md:px-0">
                    <p className="text-Orange-ecomerce font-bold mb-2 uppercase tracking-wide">Sneaker Company</p>
                    <h2 className="font-bold text-3xl mb-4">Fall Limited Edition Sneakers</h2>
                    <p className="mb-3 text-Dark-grayish-blue">

                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.

                    </p>
                    <div className="grid gap-2 grid-cols-3 font-bold items-center mb-5 md:gap-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_4fr]">
                        <span className="text-2xl">$125.00</span>
                        <span className="bg-Pale-orange rounded-md mr-auto py-1 px-2 text-Orange-ecomerce">50%</span>
                        <span className="text-Grayish-blue text-right text-lg line-through md:col-span-3 md:text-left">$250.00</span>
                    </div>
                    <div className="grid grid-cols-3 font-bold gap-3 md:grid-cols-[1fr_1.7fr]">
                        <div className="col-span-3 bg-gray-200 flex items-baseline justify-between py-2 px-5 pb-3 md:col-span-1">
                            <button className='text-3xl text-Orange-ecomerce ' onClick={handleRest}>-</button>
                            <span className='text-xl'>{numero}</span>
                            <button className='text-3xl text-Orange-ecomerce' onClick={handleSum}>+</button>
                        </div>
                        <button className="col-span-3 md:col-span-1 bg-Orange-ecomerce text-white py-3 rounded-md flex gap-x-3 justify-center hover:bg-orange-700 transition-all">
                            <CartIcon fill="#fff"/>
                            <span>Add to cart</span>
                        </button>
                    </div>
                    
        </section>
    )
}

export default DetailsProduct

