import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Table } from 'reactstrap';

export default class PreApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      items: []
    };
  }

  printMikan(c) {
    let m = '';
    for (let i = 0; i < c; i++) {
      m += '🍊';
    }
    return m;
  }

  countUp(e) {
    this.setState({
      count: this.state.count + 1
    });
  }

  unDo(e) {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  reSet(e) {
    this.setState({
      count: 0
    });
  }

  bodyChanged(e) {
    this.setState({ body: e.target.value });
  }

  post(e) {
    this.setState({ items: [{ count: this.state.count, body: this.state.body }] });
  };

  render() {
    const date = new Date();
    const m = (date.getMonth() + 1).toString();
    const d = date.getDate().toString();
    const html = this.state.items.map(e => (
      <tr>
        <th scope="row">{m + '/' + d}</th>
        <th>{this.printMikan(e.count)}</th>
        <th>{e.body}</th>
      </tr>
    ));

    return (
      <div>
        <h2 className="counter">{this.state.count}</h2>
        <button onClick={e => this.countUp(e)} className="btn btn-success btn-sm">➕</button>
        <button onClick={e => this.reSet(e)} className="btn btn-success btn-sm">Reset</button>
        <button onClick={e => this.unDo(e)} className="btn btn-success btn-sm">➖</button>
        <br />
        <br />
        <textarea row="10" cols="30" value={this.state.body} onChange={e => this.bodyChanged(e)} className="form-group form-control textfrom" />
        <Button color="success" onClick={e => this.post()}>投稿</Button>
        <br />
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
      </div >
    );
  }
}