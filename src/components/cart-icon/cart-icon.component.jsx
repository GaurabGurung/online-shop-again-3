import { useContext } from "react";
import {ReactComponent as ShoppingBagIcon} from "../../assests/shopping-bag.svg"
import "./cart-icon.styles.scss";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount}= useContext(CartContext)
    const toggleIsCartOpen= () => setIsCartOpen(!isCartOpen)
    return (
        <div className="cartIcon-container" onClick={toggleIsCartOpen}>  
            <ShoppingBagIcon className="shopping-icon" />
            <span className="count">{cartCount}</span>
        </div>
    )
}

export default CartIcon;