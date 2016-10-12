import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

let AddItem = ({ dispatch }) => {
  let input

  return (
    <div className="addFormContainer">
      <form className="addForm" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addItem(input.value))
        input.value = ''
      }}>
        <input type="text" placeholder="Add an item" className="addInput" ref={node => {
          input = node
        }} />
      <button type="submit" className="addButton">
          Add Item
        </button>
      </form>
    </div>
  )
}
AddItem = connect()(AddItem)

export default AddItem
