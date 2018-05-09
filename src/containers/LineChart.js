import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  datasets: [
    {
      label: 'Passed',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(0,145,41,0.4)',
      borderColor: 'rgba(0,145,41,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(0,145,41,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(0,145,41,1)',
      pointHoverBorderColor: 'rgba(0,145,41,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 12, 8, 10, 15, 8, 6, 12, 13, 10, 11, 12, 13, 14]
    },
    {
      label: 'Blocked',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(186,185,182,0.4)',
      borderColor: 'rgba(186,185,182,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(186,185,182,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(186,185,182,1)',
      pointHoverBorderColor: 'rgba(186,185,182,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 6, 15, 10, 8, 9, 12, 11, 12, 11, 0, 0, 0, 0]
},
{
  label: 'Retest',
  fill: false,
  lineTension: 0.1,
  backgroundColor: 'rgba(75,192,192,0.4)',
  borderColor: 'rgba(75,192,192,1)',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: 'rgba(75,192,192,1)',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  pointHoverBorderColor: 'rgba(75,192,192,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  data: [0, 1, 0, 2, 0, 3, 0, 6, 0, 1, 0, 2, 0, 1]
},
{
  label: 'Failed',
  fill: false,
  lineTension: 0.1,
  backgroundColor: 'rgba(141,10,21,0.4)',
  borderColor: 'rgba(141,10,21,1)',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: 'rgba(141,10,21,1)',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(141,10,21,1)',
  pointHoverBorderColor: 'rgba(141,10,21,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  data: [16, 12, 10, 9, 9, 9, 6, 6, 3, 2, 1, 2, 0, 0]
}
  ]
};

export default React.createClass({
  displayName: 'LineExample',

  render() {
    return (
      <div>
        <Line data={data} />
      </div>
    );
  }
});
