import './shop.styles.scss';
import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/productCard.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../../components/categories-preview/categories-preview.component';

const Shop = () => {

    const {categoriesMap} = useContext(CategoriesContext);

    return (
        <Routes>
            <Route  index element = {<CategoriesPreview/>}/>
        </Routes>
    )
}
export default Shop ;