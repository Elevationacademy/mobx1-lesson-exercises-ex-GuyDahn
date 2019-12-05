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
    @action editItem = (itemName, newLocation) => {
        this.list.find(i => i.name === itemName).location = newLocation
    }
    @action deleteItem = (name) => {
        console.log(this.list);
        let i = this.list.findIndex(i => i.name === name)
            this.list.splice(i, 1);
    }
}

