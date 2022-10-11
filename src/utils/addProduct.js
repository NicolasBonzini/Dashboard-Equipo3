

// const addProduct = (form) => {

//     fetch('http://localhost:5000/api/product', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     }, body: JSON.stringify(form)
// })
//         .then(resp => resp.json())
//         .then(data => { return JSON.stringify(data) })
//         .catch(error => { return error })

// }

const addProduct = async (form) => {
    const res = await fetch('http://localhost:5000/api/product', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }, body: JSON.stringify(form)
    })

    return (
        res
    )
}

export default addProduct;