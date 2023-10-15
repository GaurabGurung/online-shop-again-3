import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-items/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () =>{

    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const gotToCheckOutHandler = () => navigate('/checkout')

    return (
        <div className='cart-dropdown'>
            <div className='cartitems'> 
                {
                    cartItems.length ? (
                        cartItems.map((item)=> (
                            <CartItem key={item.id} cartItem = {item}/>
                        ))
                    ) : (
                        <span className='empty'> Your Cart is Empty</span>
                    )
                }
            </div>
                <Button onClick={ gotToCheckOutHandler}> Go to Checkout</Button>          
        </div>
    )
}

export default CartDropDown;

