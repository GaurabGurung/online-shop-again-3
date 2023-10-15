import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(
        (cartItem)=> cartItem.id === productToAdd.id
    );
    if( existingCartItem ) {
        return (
            cartItems.map((cartItem)=> cartItem.id === productToAdd.id ?
                {...cartItem, quantity : cartItem.quantity + 1}
                : cartItem
        )
        )
    }
    return (
        [...cartItems, {...productToAdd, quantity : 1}]
    )
}
 

const clearCartItem = (cartItems, cartItemToRemove) => {
    const newCartItems = cartItems.map((cartItem)=>  { 

        if(cartItem.id === cartItemToRemove.id) {

            return {...cartItem, quantity : cartItem.quantity - 1}
        } else {
            return cartItem
        }
    })

    const filteredCartItems = newCartItems.filter((cartItem)=> cartItem.quantity >= 1);
    return filteredCartItems;
}
 

const deleteCartItem = (cartItems, productToDelete) => cartItems.filter((cartItem)=>cartItem.id !== productToDelete.id)

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems : [],
    addItemToCart: () => {},
    cartCount: 0,
})


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    const [cartCount, setCartCount] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd)); 
    }

    const deleteItem = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(clearCartItem(cartItems, cartItemToRemove))        
    }

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=>{
        return  total + cartItem.quantity;
    },0);

    setCartCount(newCartCount)
    },[cartItems])

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, deleteItem};

    return (
        <div>
            <CartContext.Provider value={value}> {children} </CartContext.Provider>
        </div>
    )
}
