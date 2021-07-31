import React from 'react'
import './App.css';

import InputForm from './InputForm/InputForm';
import HammingGraph from './HammingGraph/HammingGraph';

import { Button, Card, Divider} from 'antd';
import { Row, Col } from 'antd';
import { RollbackOutlined} from '@ant-design/icons';
import SortedItemList from './Lists/SortedItemList';



export default class App extends React.Component {
    state = {
        values: []
    }

    // Append new item to state
    handleAdd = (item) => {
        if (item){
            this.setState( (state) => ({values: state.values.concat(item) }));
        }
    }

    // Reset the current values
    onResetClick = () => {
        this.setState({values: []})
    }

    render() {
        return (
            <div>
                <Row gutter={[16, 16]} justify='center'>
                    <Col span={10} padding={20}>
                        <Card className="card" title="Add values">
                            <InputForm  items={this.state.values} onAdd={this.handleAdd}/> 
                            <Divider> values</Divider>
                            <div className="sorted-list">
                                <SortedItemList  items={this.state.values}/>
                            </div>
                            <Divider></Divider>
                            <Button block icon={<RollbackOutlined/>} onClick={this.onResetClick}>Clear values</Button>
                        </Card>
                    </Col>
                    <Col span={14} padding={20}>
                        <HammingGraph  values={this.state.values}/>
                    </Col>
                </Row>
            </div>
        );
        }
    }