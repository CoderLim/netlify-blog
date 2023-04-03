import React from 'react';
import { Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const About = () => {
  return (
    <Typography>
      <Title>介绍</Title>
      <Paragraph>
        大家好，我是探险家火焱。这是我的
        <a
          href="https://juejin.cn/user/720905151979544"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600"
        >
          掘金主页
        </a>
        ，欢迎关注。
      </Paragraph>
      {/* 
      <Paragraph>
        <blockquote>
          不要期待资源，不要等待认可，不要抱怨环境。成为推动事情的人，成为发起事情的人，成为领导事情的人。要能够在没有鼓励、没有认可、没有帮助、没有理解、没有宽容、没有退路、只有压力的情况下达成目标，要成为发动机、成为领袖，去影响其他人发光，引领目标的达成。
        </blockquote>
      </Paragraph> */}

      <Title>座右铭</Title>
      <Paragraph>积极主动、独立思考的长期主义者</Paragraph>

      <Title>生活原则</Title>
      <Paragraph>
        <ul>
          <li>关注推理过程，而不是结果</li>
          <li>关注可信度高，并与你不一致的观点</li>
          <li>痛苦 + 反思 = 进步</li>
          <li>反过来想，总是反过来想</li>
          <li>不要被思维挟持，活在当下</li>
        </ul>
      </Paragraph>

      <Title>工作原则</Title>
      <Paragraph>
        <ul>
          <li>为令人振奋的目标奋斗</li>
          <li>不要在乎形象和感受，关注如何实现目标</li>
          <li>不断比对结果和目标</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};

export default About;
