import imageProduct1 from '@/assets/images/image-product-1.jpg'
import imageProduct2 from '@/assets/images/image-product-2.jpg'
import imageProduct3 from '@/assets/images/image-product-3.jpg'
import imageProduct4 from '@/assets/images/image-product-4.jpg'

import SmallProduct1 from '@/assets/images/image-product-1-thumbnail.jpg'
import SmallProduct2 from '@/assets/images/image-product-2-thumbnail.jpg'
import SmallProduct3 from '@/assets/images/image-product-3-thumbnail.jpg'
import SmallProduct4 from '@/assets/images/image-product-4-thumbnail.jpg'
import PrevIcon from '@/components/icons/PrevIcon'
import NextIcon from '@/components/icons/NextIcon'

import { useState } from 'react'


const array_imgs = [imageProduct1, imageProduct2, imageProduct3, imageProduct4]

export default () => {
    
    const [imgIndex, setImgIndex] = useState(0) //el useState cuando detecta un cambio, vuelve a renderizar el JSX
    
    const handleClickNext = () => {
        
        //el .lenght nos devuelve un valor, pero los array parten en 0, por lo tanto se le añade un -1 y nos devuelve un 3 en este caso
        imgIndex === array_imgs.length -1 ? setImgIndex(0) : setImgIndex(imgIndex + 1)

        //si es distinto entra a los puntos, si el iagual al signo de interrogacion
    }

    const handleClickprev = () => {
        
        if(imgIndex === 0 ) return setImgIndex(array_imgs.length -1)
        setImgIndex(imgIndex - 1)
    }
    
    
    
    return (
        <section className="grid md:grid-cols-4 md:gap-4">
            <div className='relative col-span-4'>
                <img src={array_imgs[imgIndex]} alt="" className='aspect-[16/12]'/> {/*hacer las imagenes dinamicas */}
                <div className='absolute top-1/2 left-0 -translate-y-1/2 flex w-full justify-between px-4 md:hidden'>
                    <button onClick={handleClickprev} className='bg-white h-10 w-10 rounded-full flex justify-center items-center'>
                        <PrevIcon />
                    </button>
                    <button onClick={handleClickNext} className='bg-white h-10 w-10 rounded-full flex justify-center items-center'>
                        <NextIcon />
                    </button>
                </div>
            </div>
            <img src={SmallProduct1} alt="" className='hidden md:block' />
            <img src={SmallProduct2} alt="" className='hidden md:block' />
            <img src={SmallProduct3} alt="" className='hidden md:block' />
            <img src={SmallProduct4} alt="" className='hidden md:block' />
            
        </section>
    )
}


