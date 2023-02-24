import { useContext } from "react";
import { useCartProducts } from "@/context/useCartProducts";



import DeleteIcon from "@/components/icons/DeleteIcon";

export default () => {
    const { cartProducts, deleteCartProducts } = useContext(useCartProducts);

    return (
        <section className="absolute top-[125%] left-0 z-10 w-full md:left-full md:max-w-sm md:-translate-x-full ">
            <div className="mx-4 rounded-md bg-white shadow-2xl">
                <h4 className="px-6 py-5 text-lg font-bold">Cart</h4>
                <hr />
                {cartProducts.length === 0 ? (
                    <p className="py-10 text-center">cart is empty</p>
                ) : (
                    cartProducts.map((product) => (
                        <article
                            key={product.id}
                            className="grid grid-cols-[1fr_6fr_1fr] items-center gap-4 px-6 py-4"
                        >
                            <img src={product.img} alt="" className="rounded-md" />
                            <div>
                                <h6>{product.name}</h6>
                                <p>
                                    <span>${product.discountPrice} x {product.amount}</span>{" "}
                                    <span className="font-bold">${(product.discountPrice * product.amount).toFixed(2)}</span>
                                </p>
                            </div>
                            <button className="ml-auto" onClick={() => deleteCartProducts(product.id)}>
                                <DeleteIcon className="transition-all hover:fill-Orange-ecomerce" />
                            </button>
                        </article>
                    ))
                )}

                {cartProducts.length !== 0 && (
                    <div className="px-6 pb-6">
                        <button className="w-full rounded-md bg-Orange-ecomerce py-4 text-white transition-all hover:bg-orange-700">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
