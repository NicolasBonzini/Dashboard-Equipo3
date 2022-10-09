import React from 'react'

import deleteProduct from '../utils/deleteProduct'

function Button(props) {


  //Eliminar producto
  const handleDeletion = (e)=>{
    console.log(e)
    async function deleted() {
      const del = await deleteProduct(props.id)
      .then(res=> console.log(res))
    }

    deleted()

  }


  return (
    <>
        <button onClick={handleDeletion} className={'btn_gray ' + props.personalClass}>{props.text}</button>
    </>
  )
}

export default Button