import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import { Button } from 'antd';
import { GithubOutlined} from '@ant-design/icons';

ReactDOM.render(
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <h2 style={{color: 'white'}}>React hamming distance</h2>
    </Header>
  <Content className="site-layout" style={{ height: '100%' ,padding: '0 50px', marginTop: 64 }}>

  <div className="site-layout-background" style={{ padding: 24, paddingTop: 40,  minHeight: 350 }}>
    <App/>
  </div>
  </Content>
  <Footer style={{ textAlign: 'center' }}>
      <Button type= 'text'shape='round' size='large' icon={<GithubOutlined/>} target="#" href="https://github.com/WSeubring/React-hamming-distance">Github</Button>
  </Footer>
  </Layout>,
  document.getElementById('root')
);

