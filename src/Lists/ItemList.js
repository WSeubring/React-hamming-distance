import { List } from 'antd/lib/form/Form';
import React from 'react'

export default class ItemList extends React.Component {
    render() {
        // FIXME: This is a index based key, not recommended. Look at creating unique keys. 
        // For this use case this seems fine, as the list elements do not have indiviual actions.
        const listItems = this.props.items.map((el, index) => 
            <li key={index}> {el}</li>
        );

        return (
            <ul> {listItems}</ul>
        );
        }
    }