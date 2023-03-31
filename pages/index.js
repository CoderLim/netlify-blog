import React, { useState } from 'react';
import { Layout, Menu, theme, Avatar } from 'antd';
import Image from 'next/image';
import SEO from '../components/SEO';
import Home from './home';
import About from './about';
import LogoImage from '../images/logo.png';
import Tool from './tool';
import Data from './data';

const { Header, Content, Sider } = Layout;

const topMenuData = [
  {
    key: 'home',
    label: '首页',
  },
  {
    key: 'tool',
    label: '效率工具',
  },
  {
    key: 'data',
    label: '数据查询',
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
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [activeMenu, setActiveMenu] = useState(topMenuData[0].key);

  const onTopMenuClick = (info) => {
    setActiveMenu(info.key);
  };

  return (
    <Layout className="h-full">
      <Header className="flex justify-between items-center gap-4">
        <SEO
          title="火焱的空间"
          description="这里包含了各种前端/技术咨询和可以办公提效的小工具，欢迎访问"
        />
        <Menu
          selectedKeys={[activeMenu]}
          theme="dark"
          mode="horizontal"
          items={topMenuData}
          onClick={onTopMenuClick}
        />
        <Avatar
          icon={<Image src={LogoImage} alt="logo" width={42} height={42} />}
          className="cursor-pointer"
          onClick={() =>
            window.open('https://juejin.cn/user/720905151979544', '_blank')
          }
        />
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
            {activeMenu === 'tool' ? <Tool /> : null}
            {activeMenu === 'data' ? <Data /> : null}
            {activeMenu === 'about' ? <About /> : null}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
