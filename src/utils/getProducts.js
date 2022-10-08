import React from 'react'
import { useState } from 'react';

const url = 'http://localhost:5000/api/product';

const getProducts = async () => {

    let dataApi = await fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(error => alert(`Error: ${error}`));
    
    return dataApi;
}

export default getProducts;