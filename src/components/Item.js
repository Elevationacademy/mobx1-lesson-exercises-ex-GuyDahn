import React, { Component, observable } from 'react';
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
    //your code here
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox" onClick={this.checkItem}
          value={item.name} />
        <h2 id='item-title'> {item.name}</h2>
        <div>{item.location}</div>
        <button onClick={this.editItem}>edit</button>
        <button onClick={this.removeItem}>remove</button>
      </div>)
  }
}

export default Item