import { useState } from "react";
import type { CartCtx, CartItems } from "../types/Cart";
import CartContext from "./cart-context";

const cartItemsFromLocalStorage = localStorage.getItem('cartItems');

let storedCartItems: CartItems[] =  [
  {
    id: 1,
    quantity: 4
  },
  {
    id: 4,
    quantity: 1
  },
  {
    id: 2,
    quantity: 5
  },
];

if (cartItemsFromLocalStorage) {
  storedCartItems = JSON.parse(cartItemsFromLocalStorage);
};

const CartContextProvider = ({children}: {children: React.ReactNode}) => {
    const [cartItems, setCartItems] = useState<CartItems[]>(storedCartItems);


    const handleAddItemToCart = (id: string) => {
      setCartItems(prevCartItems => {
        const updatedCartItems = [...prevCartItems];
        const existingCartItemIndex = updatedCartItems.findIndex(cartItem => cartItem.id === id);
        const existingCartItem = updatedCartItems[existingCartItemIndex];
        
        if (existingCartItem) {
          const updatedCartItem = {
            ...existingCartItem
          };
          updatedCartItems[existingCartItemIndex] = updatedCartItem;
        } else {
          updatedCartItems.push({
            id: id,
            quantity: 1
          });
        } 
        
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        return updatedCartItems;
      });
    }

    const handleUpdateCartItemQuantity = (id: string, amount: number) => {
      setCartItems(prevCartItems => {
        const updatedCartItems = [...prevCartItems];
        const updatedCartItemIndex = updatedCartItems.findIndex(item => item.id === id);
        
        const updatedCartItem = {
          ...updatedCartItems[updatedCartItemIndex],
        }
        updatedCartItem.quantity += amount;

        if (updatedCartItem.quantity <= 0) {
          updatedCartItems.splice(updatedCartItemIndex, 1);
        } else {
         updatedCartItems[updatedCartItemIndex] = updatedCartItem;
        } 

        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        return updatedCartItems;
      }); 
    }

    const handleDeleteCartItem = (id: string) => {
      setCartItems(prevCartItems => {
        const cartItems = [...prevCartItems];

        const index = cartItems.findIndex(cartItem => cartItem.id === id);

        cartItems.splice(index, 1);

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return cartItems;
      });
    }

    const cartContextValue: CartCtx = {
        cartItems,
        handleAddItemToCart,
        handleUpdateCartItemQuantity,
        handleDeleteCartItem
    }

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
}
 
export default CartContextProvider;