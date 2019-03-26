import React from 'react';
import { LineChart } from 'react-charts-d3';

export default () => {

  function sinGraph(x) {
    var r = 3.14 * x / 180;
    const y = Math.sin(r);
    return y;
  }

  const data1 = [];
  for (let x = -360; x <= 360; x = x + 10) {
    data1.push({
      x,
      y: sinGraph(x)
    });
  }

  function cosGraph(x) {
    var r = 3.14 * x / 180;
    const y = Math.cos(r);
    return y;
  }

  const data2 = [];
  for (let x = -360; x <= 360; x = x + 10) {
    data2.push({
      x,
      y: cosGraph(x)
    });
  }

  const data = [
    { key: 'Group 1', values: data1 },
    { key: 'Group 2', values: data2 },
  ];

  return (
    <LineChart height="100" data={data} />
  );
};
