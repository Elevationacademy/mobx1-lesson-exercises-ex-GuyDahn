import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = []
    @observable length

    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    @action addItem = (item) => {
        let newItem = new Item
        newItem.name = item
        this.list.push(newItem)
    }
    editItem = () => {
        // your code here
    }
    deleteItem = () => {
        // your code here
    }
}

