import React from 'react';

import data from './data';
import CardGroup from '../../components/CardGroup';

const Tool = () => {
  return (
    <div>
      {data.map((group) => (
        <CardGroup data={group} key={group.title} className="mt-4" />
      ))}
    </div>
  );
};

export default Tool;
