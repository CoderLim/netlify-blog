import React, { CSSProperties } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { SiteGroupData } from '../../types/index';
import { getSeriesImageURL } from '../../utils/common';

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
      <Typography.Title level={4} style={{ color: '#fff' }}>
        {data.title}
      </Typography.Title>

      <Row gutter={[60, 30]}>
        {data.children.map((info, index) => {
          return (
            <Col span={6} key={info.title}>
              <Card
                // cover={
                //   <img
                //     className="contrast-75 hover:contrast-100"
                //     alt="头图"
                //     src={getSeriesImageURL(index, data.imgSeed)}
                //   />
                // }
                onClick={() => handleCardClick(info.href)}
                className="cursor-pointer"
                // style={{ height: 150 }}
              >
                <Card.Meta
                  title={<span className="text-2xl">{info.title}</span>}
                  description={info.description}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
