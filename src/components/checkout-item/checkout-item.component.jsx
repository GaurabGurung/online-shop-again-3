import './checkout-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckOutItems = ({cartItem}) => {

    const {imageUrl, name, price, quantity} = cartItem;

    const {addItemToCart, removeItemFromCart, deleteItem} = useContext(CartContext)

    const removeItemHandler = () => removeItemFromCart(cartItem);
    const clearItemHandler = () => deleteItem(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt= {`${name}`}/>
            </div>
            <span  className='name'>{name}</span>
            <span className='quantity'> 
                <div  className='arrow' onClick={removeItemHandler}> &#10094; </div> 
                    <span className='value'>{quantity}</span>                  
                <div className='arrow' onClick={addItemHandler}> &#10095; </div> 
            </span>
            <span className='price'>${price}</span>
            <span className='remove-button' onClick={clearItemHandler}>&#10005;</span>
        </div>
    )


}
export default CheckOutItems;