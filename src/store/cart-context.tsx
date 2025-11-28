import { createContext } from "react";
import type { CartCtx } from "../types/Cart";

const CartContext = createContext<CartCtx>({
    cartItems: [],
    handleAddItemToCart: () => {},
    handleUpdateCartItemQuantity: () => {},
    handleDeleteCartItem: () => {},
});

export default CartContext;