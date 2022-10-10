import React from 'react'

const deleteProduct = async(id) => {
    const urlDelete = 'http://localhost:5000/api/product/'+id;
    const res = await fetch(urlDelete,
        {
            method: "DELETE",
            headers: {
            'Content-type': 'application/json'
            },
        }
                        )

  return (
    res
  )
}

export default deleteProduct