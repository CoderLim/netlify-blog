import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Home from './home';
import About from './about';

const { Header, Content, Sider } = Layout;

const topMenuData = [
  {
    key: 'home',
    label: '首页',
  },
  {
    key: 'about',
    label: '关于我',
  },
];



/**
 *  App
 */
const App = () => {
  const { token: { colorBgContainer }, } = theme.useToken();
  const [activeMenu, setActiveMenu] = useState(topMenuData[0].key);

  const onTopMenuClick = (info) => {
    setActiveMenu(info.key);
  };

  return (
    <Layout className="h-full">
      <Header className='flex items-center'>
        <Avatar icon={<UserOutlined />} />
        <Menu selectedKeys={[activeMenu]} theme="dark" mode="horizontal" items={topMenuData} onClick={onTopMenuClick} />
      </Header>
      <Layout>
        {/* <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider> */}
        <Layout style={{ padding: '0 24px 24px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {activeMenu === 'home' ? <Home /> : null}
            {activeMenu === 'about' ? <About /> : null}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;