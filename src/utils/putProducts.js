import React from 'react'

const urlPut = 'http://localhost:5000/api/product/'

const putProducts = (form) => {

  const res =  fetch(urlPut, {
                method: "PUT",
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify(form)
              })
              .then(res => {
                if (res.ok) { console.log("HTTP request successful") }
                else { console.log("HTTP request unsuccessful") }
                return res
                })
              


  return (
    res
  )
}

export default putProducts