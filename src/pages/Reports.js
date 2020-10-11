import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { FieldTimeOutlined, IeOutlined, ChromeFilled, AppleFilled, WindowsOutlined, AndroidOutlined, 
  LaptopOutlined, FrownOutlined, SmileOutlined, MobileOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default function Home() {
  return (
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Reports</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={300}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<FieldTimeOutlined />} title="Today">
              <Menu.Item icon={<><ChromeFilled /><AppleFilled /><LaptopOutlined /><FrownOutlined /></>} key="1">8:00 AM</Menu.Item>
              <Menu.Item icon={<><ChromeFilled /><AppleFilled /><LaptopOutlined /><SmileOutlined /></>} key="2">9:15 AM</Menu.Item>
              <Menu.Item icon={<><IeOutlined /><WindowsOutlined /><MobileOutlined /><SmileOutlined /></>} key="3">10:11 AM</Menu.Item>
              <Menu.Item icon={<><ChromeFilled /><AndroidOutlined /><MobileOutlined /><SmileOutlined /></>} key="4">12:00 PM</Menu.Item>
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