import MainHeader from './components/header/MainHeader'
import MainProducts from './components/productsMain/MainProduct'

import CartProductsProvider from '@/context/useCartProducts'

const App = () => { 
    return (
        <CartProductsProvider>
            <MainHeader />
            <MainProducts />
        </CartProductsProvider>
    ) 
}

export default App