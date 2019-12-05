import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    let newLocation = prompt('please enter new item')
    this.props.store.editItem(this.props.item.name, newLocation)
  }
  deleteItem = () => {
    this.props.store.deleteItem()
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <h2 id='item-title'> {item.name}</h2>
        <div>{item.location}</div>
        <input type="checkbox" onClick={this.checkItem}
          value={item.name} />
        <button onClick={this.editItem}>edit</button>
        <button onClick={this.deleteItem}>remove</button>
      </div>)
  }
}

export default Item