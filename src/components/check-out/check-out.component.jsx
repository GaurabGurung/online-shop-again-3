import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './check-out.styles.scss';

const CheckOut = () => {

    const {cartItems, addItemToCart, removeItemFromCart} = useContext(CartContext)

    return (
        <div>
            {cartItems.map((item)=>{
                const {name, price, quantity, imageUrl, id} = item;

                return (
                    <div key={id}>
                        <img src={imageUrl} alt= {`${name}`}/>
                        <h2 onClick={()=>{addItemToCart(item)}}> increase </h2>
                        <span  className='name'>{quantity}</span>
                        <h2 onClick={()=> removeItemFromCart(item)}> decrease </h2>
                        <span className='price'>{quantity} x ${price}</span>
                    </div>
                )
        })}
        </div>
    )
}

export default CheckOut;