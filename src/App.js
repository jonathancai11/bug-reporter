import React from 'react';
import { Layout, Menu } from 'antd';

import Home from './pages/Home';
import './App.css';
import logo from './assets/logo.png';

const { Header, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{minHeight: "100vh"}}>
        <Header className="header">
          <img className="logo" src={logo} height={24}/>
          {/* <div className="logo" style={{width: "unset"}}>
            <h1 style={{color: "white", display: "inline"}}>Bug Reporter</h1>
          </div> */}
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{display: "inline-block"}}>
            {/* <Menu.Item key="1">Dashboard</Menu.Item> */}
            <Menu.Item key="2">Reports</Menu.Item>
            {/* <Menu.Item key="3">Settings</Menu.Item> */}
          </Menu>
        </Header>
        <Home/>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;
