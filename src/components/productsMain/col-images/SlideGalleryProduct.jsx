import { useEffect, useRef, useState } from "react";
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

export default ({
    array_imgs = [],
    array_imgsSmall = [],
    itsOpenModal = false,
    handleCloseModal = null,
    handleOpenModal = () => {},
    ...props
}) => {
    //si no existe, lo inicializamos en un array vacio, para que no se rompa nuestor sitio web; esto en la utilizacion de una api y no de archivos estaticos

    const btnSlider = useRef(null);

    useEffect(() => {
        itsOpenModal && btnSlider.current.classList.remove("md:hidden"); //si esta en true removemos la clase hidden con javascript nativo
        if (itsOpenModal)
            btnSlider.current.classList.remove("md:cursor-zoom-in");
    }, [itsOpenModal]); //estará pediente si el valor del modal cambia a false o true

    const [imgIndex, setImgIndex] = useState(0); //el useState cuando detecta un cambio, vuelve a renderizar el JSX

    const handleClickNext = () => {
        //el .lenght nos devuelve un valor, pero los array parten en 0, por lo tanto se le añade un -1 y nos devuelve un 3 en este caso
        imgIndex === array_imgs.length - 1
            ? setImgIndex(0)
            : setImgIndex(imgIndex + 1);

        //si es distinto entra a los puntos, si el iagual al signo de interrogacion
    };

    const handleClickprev = () => {
        if (imgIndex === 0) return setImgIndex(array_imgs.length - 1);
        setImgIndex(imgIndex - 1);
    };

    return (
        <section {...props}>
            {itsOpenModal && (
                <button
                    className="text-right md:col-span-4"
                    onClick={handleCloseModal}
                >
                    cerrar
                </button>
            )}
            <div className="relative col-span-4">
                <img
                    src={array_imgs[imgIndex]}
                    alt=""
                    className={`aspect-[16/13] w-full object-cover md:aspect-[16/14] md:rounded-md lg:aspect-[16/11] xl:aspect-[14/9] 2xl:max-h-[500px] ${
                        !itsOpenModal && "md:cursor-zoom-in"}`}
                    onClick={handleOpenModal}
                />{" "}
                {/*hacer las imagenes dinamicas */}
                <div
                    ref={btnSlider}
                    className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 md:hidden"
                >
                    <button
                        onClick={handleClickprev}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all hover:bg-gray-400"
                    >
                        <PrevIcon />
                    </button>
                    <button
                        onClick={handleClickNext}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all hover:bg-gray-400"
                    >
                        <NextIcon />
                    </button>
                </div>
            </div>

            {array_imgsSmall.map((imgSmall, i /*return implícito */) => (
                <div
                    onClick={() => {
                        setImgIndex(i);
                    }}
                    className="relative cursor-pointer overflow-hidden rounded-md"
                    key={imgSmall}
                >
                    <img
                        src={imgSmall}
                        alt=""
                        className="hidden md:block md:rounded-md"
                    />
                    <span
                        className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${
                            i === imgIndex && "bg-[rgba(255,255,255,0.5)]"
                        }`}
                    ></span>
                </div>
            ))}
        </section>
    );
};
