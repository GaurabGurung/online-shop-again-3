import { useContext, useEffect, useState } from 'react';
import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/productCard.component';


const Category = () => {

    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=> {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category])
        
        return (
            <>
                <h2 className='title'>{category.toUpperCase()}</h2>
                <div className='category-style'>
                    {
                        products &&
                        products.map((product)=> <ProductCard key={product.id} product= {product}/> )
                    }
                </div>
            </>
        )
}

export default Category;