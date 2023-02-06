import logoSneakers from '@/assets/images/logo.svg' //el @ hace referencia al SRC
import imagePerfil from '@/assets/images/image-avatar.png'
import MenuIcon from '@/components/icons/MenuIcon'
import CartIcon from '@/components/icons/CartIcon'
import CloseIcon from '@/components/icons/CloseIcon'
import { useState } from 'react'
import NavLinkHeader from '@/components/header/NavLinkHeader'


const MainHeader = () => { 
    
    const [classActive, setClassActive] = useState("hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-5 md:p-0")


    const handleOpenMenu = () => {
       setClassActive(
        "absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
       )
    }


    const handleCloseMenu = () => (
        setClassActive(
            "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
            )
    )
    
    
    return (
        
        <>
            <header className='container mx-auto flex items-center gap-8 px-2 py-4 md:py-0'>
                <button className='md:hidden' onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img src={logoSneakers} alt="" className='mr-auto mb-1 h-5 md:mr-0'/>
                
                <nav className={classActive}>
                    <button className='mb-12 md:hidden' onClick={handleCloseMenu}>
                        <CloseIcon />
                    </button>
                    <NavLinkHeader text="Collections"/>
                    <NavLinkHeader text="Men"/>
                    <NavLinkHeader text="Women"/>
                    <NavLinkHeader text="About"/>
                    <NavLinkHeader text="Contact"/>
                    
                </nav>
                <div className='flex gap-4'>
                    <button>
                        <CartIcon />
                    </button>
                    <img src={imagePerfil} alt="" className='w-9'/>
                </div>
            </header>
            <span className='hidden container mx-auto md:block h-[2px] w-full bg-gray-500'></span>
        
        </>
        
        ) 
    
}
export default MainHeader



//"absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21] p-8 
//font-bold 
//md:mr-auto md:flex md:flex-row md:gap-5 bg-gray-400 md:static"