import React from 'react'
import InputPanel from './InputPanel';
import HammingGraph from './HammingGraph';

export default class App extends React.Component {
    state = {
        values: []
    }

    handleAdd = (item) => {
        if (item){
            this.setState( (state) => ({values: state.values.concat(item) }));
        }
    }

    render() {
        return (
            <div>
                <InputPanel items={this.state.values} onAdd={this.handleAdd}/>
                <HammingGraph values={this.state.values}/>
            </div>
        );
        }
    }