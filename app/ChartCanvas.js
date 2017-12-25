import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import request from 'superagent';


export default class ChartCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentWillMount() {
    this.loadData();
  }

  loadData() {
    request.get('/api/getMikan').end((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({ items: data.body.datas });
    });
  }

  render() {
    const itemsHtml = this.state.items.map(e => (
      <li>
        食べたみかんの数 : {e.count}
        <br />
        食べたときの気持ち : {e.body}
      </li>
    ));
    const dataArray = this.state.items.map((e, i) => {
      return [e.count];
    });
    const data = {
      labels: ['今日', '', '', '', '', '', '一週間前'],
      datasets: [
        {
          type: 'bar',
          label: 'みかん',
          data: [5, 2, 1, 2, 1, 3, 1, 3, 3, 3, 3, 3],
          fill: false,
          backgroundColor: '#eb7a00',
          borderColor: '#eb7a00',
          hoverBackgroundColor: '#eb7a00',
          hoverBorderColor: '#eb7a00',
        }
      ]
    };
    const options = {};

    return (
      <div>
        <ul>{itemsHtml}</ul>
        <p>{dataArray}</p>
        <Bar
          data={data}
          width={600}
          height={250}
          options={options}
        />
        <button onClick={e => this.loadData()}>読込</button>
      </div >
    );
  }
}