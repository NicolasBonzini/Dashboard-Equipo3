import React from 'react'

function Button(props) {
  return (
    <>
        <button className={'btn_gray ' + props.personalClass}>{props.text}</button>
    </>
  )
}

export default Button