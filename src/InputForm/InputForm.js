import React from 'react'

import { Form, Input , Button, Row, Col, Card, Divider } from 'antd';
import { PlusOutlined,  RollbackOutlined} from '@ant-design/icons';

export default class InputForm extends React.Component {
    formRef = React.createRef();
    inputRef = React.createRef();

    onFinish = (values) => {
        // Notify listener of new addition
        this.props.onAdd(values.inputValue);
        
        // reset values
        this.formRef.current.resetFields();

        // focus input field
        this.inputRef.current.focus({
            cursor: 'start',
        });
    }
    
    onFinishFailed = (errorInfo) => {
        // Executed when invalid submit is fired
        console.log('Failed:', errorInfo);
    }

    render() {
        return (
            <div>
                <Form layout="inline" ref={this.formRef} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                    <Form.Item style={{marginRight:5, flex:1}} name="inputValue" label="Value"
                        rules={[{ required: true,  message:'Value is required'}, {pattern: new RegExp(/^\d{5}$/), message: "Use a string of 5 numbers (e.g. 12345)"}]}>
                        <Input ref={this.inputRef} placeholder="5-digit string (e.g. 12345)" />
                    </Form.Item> 
                    <Form.Item>
                        <Button type="primary" shape="circle" icon={<PlusOutlined/>} htmlType="submit"></Button>
                    </Form.Item>
                </Form>
            </div>
        );
        }
    }