import './shop.styles.scss';
import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';

const Shop = () => {

    const {} = useContext(CategoriesContext);

    return (

        <div className='products-container'>
            {/* {products.map((product)=> (
                <ProductCard key={product.id} product={product}/>
            ))} */}

        </div>
    )
}

export default Shop ;