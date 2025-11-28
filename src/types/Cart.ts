export type CartItems = {
    id: string | number,
    quantity: number | number;
};

export type CartCtx = {
    cartItems: CartItems[],
    handleAddItemToCart: (id: string) => void
    handleUpdateCartItemQuantity: (id: string, quantity: number) => void
    handleDeleteCartItem: (id: string) => void
};