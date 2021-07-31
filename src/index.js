import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import { Button } from 'antd';
import { GithubOutlined} from '@ant-design/icons';

ReactDOM.render(
  <Layout id="layout">
    <Header id='header'>
        <h2 style={{color: 'white'}}>React hamming distance</h2>
    </Header>
  <Content className="site-layout" id="content" style={{ }}>
    <div className="site-layout-background content-field">
      <App/>
    </div>
  </Content>
  <Footer id="footer">
      <Button type='text' shape='round' size='large' icon={<GithubOutlined/>} target="#" href="https://github.com/WSeubring/React-hamming-distance">Github</Button>
  </Footer>
  </Layout>,
  document.getElementById('root')
);

