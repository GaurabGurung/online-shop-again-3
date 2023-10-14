import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './check-out.styles.scss';
import CheckOutItems from '../checkout-item/checkout-item.component';
import CartItem from '../cart-items/cart-item.component';

const CheckOut = () => {

    const {cartItems } = useContext(CartContext);

    const totalPrice = cartItems.reduce((total, cartItem)=>{
        return total + cartItem.price * cartItem.quantity
    }, 0)

    return (
        <div className='checkout-container'> 
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem)=>{
                return <CheckOutItems key={cartItem.id} cartItem= {cartItem}/>
            })}
        <span className='total'>Total : ${totalPrice} </span>
        </div>
    )
}

export default CheckOut;