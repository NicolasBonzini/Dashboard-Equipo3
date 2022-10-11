import React, { useState } from 'react'


const delProduct = async (id) => {
  const urlDelete = `http://localhost:5000/api/product?id=${id}`;
  const res = await fetch(urlDelete,
    {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      },
    }
  )
  return await res.json()
}

export default delProduct

