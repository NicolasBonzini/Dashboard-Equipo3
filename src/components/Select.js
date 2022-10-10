import React from 'react'

const Select = () => {
  return (
    <div className="eachInput store-form">
        <label htmlFor="store">Tienda</label>
        <select name="select" className="input" id="stores">
            <option defaultValue={true}>Tienda</option>
            <option value="easy">Easy</option>
            <option value="disco">Disco</option>
            <option value="jumbo">Jumbo</option>
            <option value="paris">Paris</option>
        </select>
    </div>
  )
}

export default Select