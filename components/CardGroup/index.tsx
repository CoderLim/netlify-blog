import React, { CSSProperties } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { SiteGroupData } from '../../types/index';

interface CardGroupProps {
  data: SiteGroupData;
  className?: string;
  style?: CSSProperties;
}

export default function CardGroup(props: CardGroupProps) {
  const { data, ...others } = props;

  const handleCardClick = (href) => {
    window.open(href, '_blank');
  };

  return (
    <div key={data.title} {...others}>
      {/* <Typography.Title type="h2">{data.title}</Typography.Title> */}
      <p className="p-4">{data.title}</p>

      <Row gutter={[16, 16]}>
        {data.children.map((info) => {
          return (
            <Col span={6} key={info.title}>
              <Card
                title={info.title}
                onClick={() => handleCardClick(info.href)}
                className="cursor-pointer"
              >
                {info.description}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
