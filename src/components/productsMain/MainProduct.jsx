import DetailsProduct from "@/components/productsMain/DetailsProduct"
import SlideGalleryProduct from "./SlideGalleryProduct"


const MainProducts = () => { 
    return (
        <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <SlideGalleryProduct />
                <DetailsProduct />
            </main>
    ) 
}

export default MainProducts