import DetailsProduct from "@/components/productsMain/col-datails/DetailsProduct"
import MainImages from "@/components/productsMain/col-images/MainImages"


import imageProduct1 from '@/assets/images/image-product-1.jpg'
import imageProduct2 from '@/assets/images/image-product-2.jpg'
import imageProduct3 from '@/assets/images/image-product-3.jpg'
import imageProduct4 from '@/assets/images/image-product-4.jpg'

import SmallProduct1 from '@/assets/images/image-product-1-thumbnail.jpg'
import SmallProduct2 from '@/assets/images/image-product-2-thumbnail.jpg'
import SmallProduct3 from '@/assets/images/image-product-3-thumbnail.jpg'
import SmallProduct4 from '@/assets/images/image-product-4-thumbnail.jpg'



const array_imgs = [imageProduct1, imageProduct2, imageProduct3, imageProduct4]
const array_imgsSmall = [SmallProduct1, SmallProduct2, SmallProduct3, SmallProduct4]



const MainProducts = () => { 
    return (
        <main className="grid grid-cols-1 gap-8 md:grid-cols-2 md:min-h-[calc(100vh-88px-3px)] items-center md:container md:mx-auto">
            <MainImages array_imgs={array_imgs} array_imgsSmall={array_imgsSmall}/>
            <DetailsProduct />
        </main>
        
    ) 
}

export default MainProducts