import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { FieldTimeOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default function Home() {
    return (
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<FieldTimeOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '24px', minHeight: 280, backgroundColor: "white" }}>
              <h1>This is some content.</h1>
            </Content>
          </Layout>
        </Content>
    )
}