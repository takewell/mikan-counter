import React, { Component } from 'react';
import request from 'superagent';
import { Button } from 'reactstrap';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
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
    request
      .get('/api/countmikan')
      .query({
        count: this.state.count,
        body: this.state.body
      })
      .end((err, data) => {
        if (err) {
          console.error(err);
        }
        this.setState({ memo: '' });
        // TODO 値をリセットしたらページに新しいデータを反映させるためのコードを記述する
      });
  }

  render() {
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
      </div >
    );
  }
}