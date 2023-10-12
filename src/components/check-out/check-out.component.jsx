import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './check-out.styles.scss';

const CheckOut = () => {

    const {cartItems} = useContext(CartContext)
    return (
        <div>
            {cartItems.map((item)=>{
                const {name, price, quantity, imageUrl} = item;
                
                return (
                    <div>
                        <img src={imageUrl} alt= {`${name}`}/>
                        <div className='item-details'>
                            <span  className='name'>{name}</span>
                            <span className='price'>{quantity} x ${price}</span>
                        </div>
                    </div>
                )
        })}
        </div>
    )
}

export default CheckOut;