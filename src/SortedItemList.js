import React from 'react'
import ItemList from './ItemList'

export default class SortedItemList extends React.Component {
    render() {
        return (
            <ItemList items={this.props.items.sort()}/>
        )
    }
}