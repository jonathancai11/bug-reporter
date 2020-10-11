import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { FieldTimeOutlined, ChromeFilled, AppleFilled, LaptopOutlined, FrownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { getAllReports } from '../util/api';
import { getHM, groupByMDY, groupByTag } from '../util/util';

const { Option } = Select;
const { SubMenu } = Menu;
const { Content, Sider } = Layout;


export default function Reports() {

  let [{ reportsByTag, selectedReport, selectedTag, tags }, setReportData] = useState({})

  useEffect(() => {
    getAllReports().then((res) => {
      let { data } = res;
      let reportsByTag = groupByTag(data.reports);
      let tags = Object.keys(reportsByTag)
      setReportData({
        ...data,
        tags: tags,
        reportsByTag: reportsByTag,
      });
    }).catch((error) => {
      // window.alert(error);
    });
  }, []);

  function handleTagChange(newTag) {
    setReportData(oldData => {
      return ({
        ...oldData,
        selectedTag: newTag,
      })
    })
  }

  return (
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Reports</Breadcrumb.Item>
      </Breadcrumb>

      <Select defaultValue={selectedTag} placeholder="Select a tag" style={{ width: 200 }} onChange={handleTagChange}>
        {
          tags && tags.map((tag, i) => <Option key={i} value={tag}>{tag}</Option>)
        }
      </Select>

      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={300}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            {
              reportsByTag && selectedTag && Object.keys(groupByMDY(reportsByTag[selectedTag])).map((date) =>
                <SubMenu key="sub1" icon={<FieldTimeOutlined />} title={date}>
                  {
                    groupByMDY(reportsByTag[selectedTag])[date].reverse().map((report, i) => {
                      var timeString = getHM(new Date(report.date_created));
                      return (
                        <Menu.Item
                          onClick={() => {
                            setReportData(oldData => {
                              return ({
                                ...oldData,
                                selectedReport: report,
                              })
                            })
                          }}
                          icon={
                            <>
                              <ChromeFilled />
                              <AppleFilled />
                              <LaptopOutlined />
                              <FrownOutlined />
                            </>}
                          key={i + 2}>{timeString}
                        </Menu.Item>
                      );
                    }
                    )
                  }
                </SubMenu>
              )
            }
          </Menu>
        </Sider>
        <Content style={{ padding: '24px', minHeight: 600, backgroundColor: "white" }}>
          {
            selectedReport && <div>
              <img src={selectedReport.canvas} />
            </div>
          }
        </Content>
      </Layout>
    </Content>
  )
}