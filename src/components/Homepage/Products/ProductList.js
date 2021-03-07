import React from 'react'
import Product from './Product'

const ProductList = ({ products }) => {
    const productList = products.map((elem) => <Product key={elem.id} values={elem} />)
    return (
        <header className="grid grid-1 grid-webview-products">
            {productList}
        </header>
    )
}

export default ProductList