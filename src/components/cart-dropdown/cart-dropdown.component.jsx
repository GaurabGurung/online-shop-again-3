import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-items/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';


const CartDropDown = () =>{

    const { cartItems } = useContext(CartContext)

    return (
        <div className='cart-dropdown'>
            <div className='cartitems'> 
                {cartItems.map((cartItem)=> {
                    <CartItem key={cartItem.id} cartItem = {cartItem}/>
                })}
            </div>
            <Button>Go to Checkout</Button>
            
        </div>
    )
}

export default CartDropDown;