
import { createContext, useEffect, useState } from 'react'
import { getCategoriesAndDocuments } from '../utility/firebase.utils';

export const CategoriesContext = createContext({
    categoriesMap : [],
})


export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    
    useEffect(() => {
        const getCategoriesMap = async () => { 
            const categoriesMap = await getCategoriesAndDocuments()
            setCategoriesMap(categoriesMap);
        }
        getCategoriesMap()
    },[]);
    
    const value = {categoriesMap};

    return (
        <CategoriesContext.Provider value={value}> {children}</CategoriesContext.Provider>   
    )
};