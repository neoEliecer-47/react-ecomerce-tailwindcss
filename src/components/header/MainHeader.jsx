import { useContext, useState } from "react";
import { useCartProducts } from "@/context/useCartProducts";

import logoSneakers from "@/assets/images/logo.svg"; //el @ hace referencia a la SRC
import imagePerfil from "@/assets/images/image-avatar.png";

import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";

import NavLinkHeader from "@/components/header/NavLinkHeader";
import CartDetailsHeader from "@/components/header/CartDetailsHeader";

const MainHeader = () => {
    const { cartProducts, countTotalAmountProducts } =
        useContext(useCartProducts);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false); //recordatorio: cuando detecta un cambio de estado vuelve a renderizarse el jsx

    //const [classActive, setClassActive] = useState("hidden font-bold");

    const handleOpenMenu = () => {
        setIsMenuOpen(true);
    };

    const handleCloseMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className="container relative mx-auto flex items-center gap-8 px-2 py-4 md:py-0">
                <button className="md:hidden" onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img
                    src={logoSneakers}
                    alt=""
                    className="mr-auto mb-1 h-5 md:mr-0"
                />

                <nav
                    className={`font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${
                        isMenuOpen
                            ? "absolute top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8 md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
                            : "hidden"
                    }`}
                >
                    <button
                        className="mb-12 md:hidden"
                        onClick={handleCloseMenu}
                    >
                        <CloseIcon />
                    </button>
                    <NavLinkHeader text="Collections" />
                    <NavLinkHeader text="Men" />
                    <NavLinkHeader text="Women" />
                    <NavLinkHeader text="About" />
                    <NavLinkHeader text="Contact" />
                </nav>
                <div className="flex gap-4">
                    <button
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        className="relative"
                    >
                        <CartIcon />

                        <span className="absolute top-0 left-[70%] rounded-full bg-Orange-ecomerce px-1 text-xs font-bold text-White">
                            {countTotalAmountProducts}
                        </span>
                    </button>
                    <img src={imagePerfil} alt="" className="w-9" />
                    {isCartOpen && <CartDetailsHeader />}
                </div>
            </header>
            <span className="container mx-auto hidden h-[3px] w-full bg-gray-500 md:block"></span>
        </>
    );
};
export default MainHeader;

//"absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21] p-8
//font-bold
//md:mr-auto md:flex md:flex-row md:gap-5 bg-gray-400 md:static"
