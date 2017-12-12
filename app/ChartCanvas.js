import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class ChartCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          type: 'bar',
          label: 'mikan',
          data: [12, 19, 3, 17, 50, 24, 7],
          fill: false,
          backgroundColor: '#eb7a00',
          borderColor: '#eb7a00',
          hoverBackgroundColor: '#eb7a00',
          hoverBorderColor: '#eb7a00'
        }
      ]
    };
    return (
      <div>
        <Bar
          data={data}
          width={600}
          height={250}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}
