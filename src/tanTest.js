import React from 'react';
import { LineChart } from 'react-charts-d3';

export default () => {

  function tanGraph(x) {
    var r = 3.14 * x / 180;
    const y = Math.tan(r);
    return y;
  }

  const data1 = [];
  for (let x = -85; x <= 85; x = x + 5) {
    data1.push({
      x,
      y: tanGraph(x)
    });
  }

  const data = [
    { key: 'Group 1', values: data1 },
  ];

  return (
    <LineChart height="100" data={data} />
  );
};
