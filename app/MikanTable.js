import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import { Button, Form, Table } from 'reactstrap';

export default class MikanTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    this.loadLogs();
  }

  loadLogs() {
    request.get('/api/getMikan').end((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({ items: data.body.datas });
    });
  }

  printMikan(c) {
    let m = '';
    for (let i = 0; i < c; i++) {
      m += '🍊';
    }
    return m;
  }

  render() {
    const html = this.state.items.map(e => (
      <tr>
        <th scope="row">{e.updatedAt.substr(5, 5).replace('-', '/')}</th>
        <th>{this.printMikan(e.count)}</th>
        <th>{e.body}</th>
      </tr>
    ));

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>日付</th>
              <th>みかん</th>
              <th>メッセージ</th>
            </tr>
          </thead>
          <tbody>
            {html}
          </tbody>
        </Table>
        <Form>
          <Button color="success" onClick={e => this.loadLogs()}>読込</Button>
        </Form>
      </div>
    );
  }
}