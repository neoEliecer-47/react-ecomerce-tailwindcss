import { createContext, useState } from "react";

export const useCartProducts = createContext();

export default (props) => {
    //body

    const [cartProducts, setCartProducts] = useState([]);

    const addCartProducts = (products) => {
        console.log("agregaste");
        //con spread, hacemos una copia de l que ya hay en el array del state y añadimos lo nuevo aagregado con el botón
        if (cartProducts.length === 0)
            return setCartProducts([...cartProducts, products]);

        setCartProducts(
            cartProducts.map((arrayProducts) => {
                if (arrayProducts.id === products.id) {
                    return {
                        ...arrayProducts,
                        amount: arrayProducts.amount + products.amount,
                    };
                    //genial
                } else {
                    return arrayProducts;
                }
            })
        );
        console.log(cartProducts);
    };

    const deleteCartProducts = (id) => {
        setCartProducts(cartProducts.filter(arrayProducts => arrayProducts.id !== id))//filter devuelve un nuevo array (con elementos distontos al id que queremos sacar o desplazar) y modificamos el estado con setCart
    };

    const countTotalAmountProducts = cartProducts.reduce((acc, current) => current.amount + acc, 0) //la cantidad mas el acumulador por cada vuelta, y en caso contrario devolvemos 0
    

    return (
        <useCartProducts.Provider
            value={{ cartProducts, addCartProducts, deleteCartProducts, countTotalAmountProducts }}
        >
            {props.children}
        </useCartProducts.Provider>
    );
};
