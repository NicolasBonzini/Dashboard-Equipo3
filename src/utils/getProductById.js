import React from 'react'

const urlProduct = 'http://localhost:5000/api/product/'

const getProductById = async (id) => {
    const url = urlProduct + id;

    let dataProduct = await fetch(url)
        .then(res => res.json())
        // .then(data => data)

    return dataProduct;
}

export default getProductById