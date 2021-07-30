import React from 'react'

export default class ItemList extends React.Component {
    render() {
        //FIXME: This is a index based key, not recommended. Look at creating unique keys and allowing duplicates
        const listItems = this.props.items.map((el, index) => 
            <li key={index}> {el}</li>
        );

        return (
            <ul> {listItems}</ul>
        );
        }
    }