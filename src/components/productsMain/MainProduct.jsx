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


const objectProduct = {
    id: 1,
    company: "SNEAKER COMPANY",
    nameProduct: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250,
    discount: 0.45,//50%
    mainImage: array_imgs,
    smallImage: array_imgsSmall
}

const MainProducts = () => { 
    return (
        <main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2">
            <MainImages
                array_imgs={objectProduct.mainImage}
                array_imgsSmall={objectProduct.smallImage}
            />
            <DetailsProduct objectProduct={objectProduct} />
        </main>
    ); 
}

export default MainProducts