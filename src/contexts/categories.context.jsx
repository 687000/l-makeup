import {createContext,useState,useEffect } from 'react';
import { addCollectionAndDocuments,getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.jsx';
import SHOP_DATA from '../shop-data.js'
import { async } from '@firebase/util';

export const CategoriesContext= createContext({
    categoriesMap:{},
});
export const CategoriesProvider =({children})=>{
    const [categoriesMap,setCategoriesMap]=useState({});
    /*
    useEffect(()=>{
        addCollectionAndDocuments('categories',SHOP_DATA,title);
    },[])*/
    useEffect(()=>{
        const getCategoriesMap=async()=>{
            const categoryMap=await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    },[])
    const value ={categoriesMap};
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )

}