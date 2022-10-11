const addProduct = async (form) => {
    const res = await fetch('http://localhost:5000/api/product', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }, body: JSON.stringify(form)
    })

    return (res)
}

// const addProduct = (form) => {

//     fetch('http://localhost:5000/api/product', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         }, body: JSON.stringify(form)
//     })
//         .then(resp => resp.json())
//         .then(data => { return data })
//         .catch(error => { return error })

// }



export default addProduct;