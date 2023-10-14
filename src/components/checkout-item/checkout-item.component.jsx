import './checkout-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckOutItems = ({cartItem}) => {

    const {imageUrl, name, price, quantity} = cartItem;

    const {addItemToCart, removeItemFromCart, deleteItem} = useContext(CartContext)

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt= {`${name}`}/>
            </div>
            <span  className='name'>{name}</span>
            <span className='quantity'> 
                <div onClick={()=> removeItemFromCart(cartItem)}> &#10094; </div> 
                    {quantity} 
                <div className='' onClick={()=>{addItemToCart(cartItem)}}> &#10095; </div> 
            </span>
            <span className='price'>${price}</span>
            <span className='remove-button' onClick={() =>deleteItem     (cartItem)}>&#10005;</span>
        </div>
    )


}
export default CheckOutItems;