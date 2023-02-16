import SlideGalleryProduct from "@/components/productsMain/col-images/SlideGalleryProduct"
import { useState } from "react"


export default ({array_imgs, array_imgsSmall}) => { 
    
    const [itsOpenModal, setItsOpenModal] = useState(false)

    const handleOpenModal = () => window.innerWidth > 767 && setItsOpenModal(true)
    

    const handleCloseModal = () => setItsOpenModal(false)
    
    
    return (
        <>
            <SlideGalleryProduct 
            array_imgs={array_imgs}  
            array_imgsSmall={array_imgsSmall}
            className="grid md:grid-cols-4 md:gap-4"
            handleOpenModal={handleOpenModal}
            />
            {
                itsOpenModal //si itsOpenModal esta en true, mostramos el modal
                
                &&  
                <>
                    <SlideGalleryProduct //modal
                    array_imgs={array_imgs}  
                    array_imgsSmall={array_imgsSmall}
                    className="hidden md:grid md:grid-cols-4 md:gap-4 md:absolute md:top-1/2 md:left-1/2 md:max-w-md md:-translate-y-1/2 md:-translate-x-1/2 md:z-10"
                    itsOpenModal={itsOpenModal}
                    handleCloseModal={handleCloseModal}
                    />
                    <span className="fixed md:top-0 md:left-0 md:backdrop-blur-sm bg-black/50 md:h-full md:w-full"
                          onClick={handleCloseModal}
                    >

                    </span>
                
                </>
            }
            
        </>
    )
 }