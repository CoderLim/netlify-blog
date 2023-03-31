import React from 'react';
import { Card, Row, Col } from 'antd';

// 技术社区
// - 掘金
// - dev.to
// - v2ex

// 技术博客
// - 张鑫旭：https://www.zhangxinxu.com/wordpress/
// - 阮一峰：https://www.ruanyifeng.com/blog/weekly/
// - 阿里妈妈前端快爆：https://www.zhihu.com/column/mm-fe
// - css trick：https://css-tricks.com/
// - caniuse

// 技术规范
// - MDN
// - ecma262：https://tc39.es/ecma262/

// 最新咨询
// - hacker-news
// - 最新最热趋势：https://bestofjs.org/

// 工具
// figma 绘图

const data = [
  {
    title: '掘金社区',
    href: 'https://juejin.cn/',
    description: '国内技术社区',
  },
  {
    title: 'dev.to',
    href: 'https://juejin.cn/',
    description: '国内技术社区',
  },
  {
    title: 'v2ex',
    href: 'https://juejin.cn/',
    description: '国内技术社区',
  },
  {
    title: 'v2ex',
    href: 'https://juejin.cn/',
    description: '国内技术社区',
  },
  {
    title: 'v2ex',
    href: 'https://juejin.cn/',
    description: '国内技术社区',
  },
];

const Home = () => {
  return (
    <div>
      <Row gutter={16}>
        {data.map((info) => {
          return (
            <Col span={6} key={info.key}>
              <Card title={info.title}>
                {info.description}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
