
import { createContext, useEffect, useState } from 'react'
import SHOP_DATA from '../shop-data';
import { getCategoriesAndDocuments } from '../utility/firebase.utils';

export const CategoriesContext = createContext({
    categoriesMap : [],
})


export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState([]);
    
    useEffect(() => {
        const getCategoriesMap =async()=>{
            const categoriesMap = await getCategoriesAndDocuments()
            console.log(categoriesMap);
        }
        getCategoriesMap()
    },[]);
    
    const value = {categoriesMap};

    return (
        <CategoriesContext.Provider value={value}> {children}</CategoriesContext.Provider>   
    )
};