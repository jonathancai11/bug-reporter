import React from 'react';
import { Layout, Menu } from 'antd';

import Home from './pages/Reports';
import './App.css';
import logo from './assets/logo.png';

const { Header, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{minHeight: "100vh"}}>
        <Header className="header">
          <a href="/"><img alt="bug reporter logo" className="logo" src={logo} height={40}/></a>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{display: "inline-block"}}>
            <Menu.Item key="2">Reports</Menu.Item>
          </Menu>
        </Header>
        <Home/>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </div>
  );
}

export default App;
