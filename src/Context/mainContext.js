import React, { createContext, useEffect, useState } from 'react';
import '../components/firebase'
import firebase from 'firebase/firebase';


// Creating a new context.
export const mainProducts = createContext();

const MainContext = ({ children }) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState(products)

    // -------------------------------------------------------
    useEffect(() => {
        if (products.length > 0) {
            setFilteredProducts(products);
        }
    }, [products]);


    // -------------------------------------------------------

    const [filters, setFilters] = useState({
        query: 'all',
        isFloneAssured: 'all'
    });

    //This is to filter data from main product list
    useEffect(() => {

        // Duplicating the original products array.
        let filteredData = products;
        if (filters.isFloneAssured !== 'all') {
            switch (filters.isFloneAssured) {
                case true:
                    filteredData = filteredData.filter((prod) => prod.IsFloneAssured == true);
                    break;
                default:
                    filteredData = filteredData.filter((prod) => prod.IsFloneAssured == false);
                    break;
            }
        }
        //
        if (filters.query !== 'all') {
            filteredData = filteredData.filter((prod) => prod.name.toLowerCase().includes(filters.query.toLowerCase().trim()))
        }


        // Setting the filteredData state as new filtered data.
        setFilteredProducts(filteredData);

    }, [filters]);

    // -------------------------------------------------------



    const fetchData = () => {
        const db = firebase.firestore();
        db
            .collection("products")
            .onSnapshot((querySnapshot) => {
                const _products = [];
                querySnapshot.docs.forEach(doc => {
                    _products.push(doc.data());
                });
                setProducts(_products);
            });
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <mainProducts.Provider
            value={{
                products,
                setProducts,

                filters,
                setFilters,

                filteredProducts,
                setFilteredProducts
            }}>
            {children}
        </mainProducts.Provider>
    )
}


export { MainContext };