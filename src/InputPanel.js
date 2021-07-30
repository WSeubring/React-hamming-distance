import React from 'react'
import SortedItemList from './SortedItemList';

export default class InputPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    handleSubmit(event){
        const item = event.target.value.value;
            
        //Notify listen of addition
        this.props.onAdd(item);

        // Clear input field
        this.setState({inputValue: ''})

        event.preventDefault();
    }
    
    render() {
        return (
            <div> 
                <h2>Add values</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name='value' value = {this.state.inputValue} 
                        onChange={this.handleChange} type='text' 
                        pattern="[\d]{5}" title='Please insert a combination of five digits. e.g 12345'></input>
                    <input type="submit" value="Submit" />
                </form>

                <SortedItemList items={this.props.items}/>
            </div>
        );
        }
    }