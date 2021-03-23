import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'

const ProductPage = () => {
    const {id, search} = useParams()
    return (
        <h1>Hello from Product Page. Product Number: {id}, Search: {search}</h1>
    )
}

export default ProductPage