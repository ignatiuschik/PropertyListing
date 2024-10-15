import React from 'react'

const AddProperty = ({ newProperty, setNewProperty, handlePropertyAddition }) => {

  return (
    <form onSubmit={handlePropertyAddition}>
        <label 
            htmlFor=""
        >
            Add local property
        </label>
        <input 
            type="text"
            required
            placeholder='Add local property' 
            value={newProperty}
            onChange={(e)=>setNewProperty(e.target.value)}
        />
    </form>
  )
}

export default AddProperty