import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { FieldTimeOutlined, ChromeFilled, AppleFilled, LaptopOutlined, FrownOutlined } from '@ant-design/icons';
// import {
//   FieldTimeOutlined, IeOutlined, ChromeFilled, AppleFilled, WindowsOutlined, AndroidOutlined,
//   LaptopOutlined, FrownOutlined, SmileOutlined, MobileOutlined
// } from '@ant-design/icons';
import { getAllReports } from '../util/api';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function getMDY(dt) {
  return (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
}

function getHM(dt) {
  return dt.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
}

function groupByMDY(reports) {
  // https://www.robinwieruch.de/javascript-groupby
  return reports.reduce((acc, value) => {
    let date = getMDY(new Date(value.date_created));
    // Group initialization
    if (!acc[date]) {
      acc[date] = [];
    }
    // Grouping
    acc[date].push(value);
    return acc;
  }, {});
}


export default function Reports() {

  let [{ reports }, setReportData] = useState({})

  useEffect(() => {
    getAllReports().then((res) => {
      let { data } = res;
      setReportData(data);
    }).catch((error) => {
      window.alert(error);
    });
  }, []);

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
            {
              reports && Object.keys(groupByMDY(reports)).map((date) =>
                <SubMenu key="sub1" icon={<FieldTimeOutlined />} title={date}>
                  {
                    groupByMDY(reports)[date].map((report, i) => {
                      var timeString = getHM(new Date(report.date_created));
                      return (
                        <Menu.Item icon={<><ChromeFilled /><AppleFilled /><LaptopOutlined /><FrownOutlined /></>} key={i}>{timeString}</Menu.Item>
                      );
                    }
                    )
                  }
                </SubMenu>)
            }
            {/* <SubMenu key="sub1" icon={<FieldTimeOutlined />} title="Today">
              <Menu.Item icon={<><ChromeFilled /><AppleFilled /><LaptopOutlined /><FrownOutlined /></>} key="1">8:00 AM</Menu.Item>
              <Menu.Item icon={<><ChromeFilled /><AppleFilled /><LaptopOutlined /><SmileOutlined /></>} key="2">9:15 AM</Menu.Item>
              <Menu.Item icon={<><IeOutlined /><WindowsOutlined /><MobileOutlined /><SmileOutlined /></>} key="3">10:11 AM</Menu.Item>
              <Menu.Item icon={<><ChromeFilled /><AndroidOutlined /><MobileOutlined /><SmileOutlined /></>} key="4">12:00 PM</Menu.Item>
            </SubMenu> */}
          </Menu>
        </Sider>
        <Content style={{ padding: '24px', minHeight: 280, backgroundColor: "white" }}>
          <h1>This is some content.</h1>
          <p>This is some content.</p>
        </Content>
      </Layout>
    </Content>
  )
}