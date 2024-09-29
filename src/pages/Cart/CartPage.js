import {CartEmpty} from "./components/CartEmpty";
import {CartList} from "./components/CartList";

export const CartPage = () => {
    const cartList = 2;
    
    return (
    <main>
        {cartList ? <CartList/> : <CartEmpty/>}
    </main>
  )
}
