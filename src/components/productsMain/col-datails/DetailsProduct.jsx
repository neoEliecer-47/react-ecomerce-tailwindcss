import { useContext, useState } from "react";

import CartIcon from "@/components/icons/CartIcon";

import { useCartProducts } from "@/context/useCartProducts";

const DetailsProduct = ({ objectProduct }) => {
    const { addCartProducts } = useContext(useCartProducts); //context api, para empujar el producto

    const [numero, setNumero] = useState(1);

    const handleChange = () => {};

    const handleSum = () => {
        setNumero(numero + 1);
    };

    const handleRest = () => {
        if (numero === 1) return;
        setNumero(numero - 1);
    };

    const handleAddToCart = () => {
        addCartProducts({
            img: objectProduct.smallImage[0],
            id: objectProduct.id,
            discountPrice: (objectProduct.price *
                (1 - objectProduct.discount)).toFixed(2),
            name: objectProduct.nameProduct,
            amount: (numero === 1 ? 1 : numero),//si el contador de la vista esta en cero retornamos un 1, y asi agrgar el producto al carro
        })
        setNumero(1)
    }

    const handleDeleteProductInCart = () => {

    }

    return (
        <section className="container mx-auto px-4 md:px-0">
            <p className="mb-2 font-bold uppercase tracking-wide text-Orange-ecomerce">
                {objectProduct.company}
            </p>
            <h2 className="mb-4 text-3xl font-bold">
                {objectProduct.nameProduct}
            </h2>
            <p className="mb-3 text-Dark-grayish-blue">
                {objectProduct.description}
            </p>
            <div className="mb-5 grid grid-cols-3 items-center gap-2 font-bold md:grid-cols-[1fr_3fr] md:gap-1 lg:grid-cols-[1fr_4fr]">
                <span className="text-2xl">
                    $
                    {(
                        objectProduct.price -
                        (objectProduct.price * objectProduct.discount * 100) /
                            100
                    ).toFixed(2)}
                </span>{" "}
                {/*objectProduct.price * (1 - objectProduct.discount) */}
                <span className="mr-auto rounded-md bg-Pale-orange py-1 px-2 text-Orange-ecomerce">
                    {objectProduct.discount * 100}%
                </span>
                <span className="text-right text-lg text-Grayish-blue line-through md:col-span-3 md:text-left">
                    ${objectProduct.price.toFixed(2)}
                </span>
            </div>
            <div className="grid grid-cols-3 gap-3 font-bold md:grid-cols-[1fr_1.7fr]">
                <div className="col-span-3 flex items-baseline justify-between bg-gray-200 py-2 px-5 pb-3 md:col-span-1">
                    <button
                        className="text-3xl text-Orange-ecomerce "
                        onClick={handleRest}
                    >
                        -
                    </button>
                    <span className="text-xl">{numero}</span>
                    <button
                        className="text-3xl text-Orange-ecomerce"
                        onClick={handleSum}
                    >
                        +
                    </button>
                </div>
                <button
                    
                    className="col-span-3 flex justify-center gap-x-3 rounded-md bg-Orange-ecomerce py-3 text-white transition-all hover:bg-orange-700 md:col-span-1"
                    onClick={handleAddToCart}
                >
                    <CartIcon fill="#fff" />
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    );
};

export default DetailsProduct;

//la funcion de flecha en el boton retorna otra funcion y asi evitar que se ejecute inmediatamente
