import React from 'react';
import { LineChart } from 'react-charts-d3';

export default () => {
  var r = 5;
  var x;
  var y;
  const data1 = [];
  const data2 = [];
  var data3 = []

  for (x = -r; x <= r; x += 0.1) {
    y = Math.sqrt(r * r - x * x);
    data1.push({
      x,
      y
    });
    y = -y;
    data2.push({
      x,
      y
    });
  }

  data3 = data1.concat(data2);

  const data = [
    { key: 'Group 1', values: data3 },
  ];

  return (
    <LineChart data={data}
      xAxis={{ innerTickSize: 200, label: "x-label" }}
      height={"400"}
    />
  );
};
