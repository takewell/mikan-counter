import React, { Component } from 'react';
import request from 'superagent';
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
        <p>counter: {this.state.count}</p>
        <button onClick={e => this.reSet(e)}>リセット</button>
        <button onClick={e => this.countUp(e)}>カウント</button>
        <button onClick={e => this.unDo(e)}>戻る</button>
        <br />
        <br />
        <br />
        <textarea row="10" cols="30" value={this.state.body} onChange={e => this.bodyChanged(e)} />
        <br />
        <br />
        <button onClick={e => this.post()}>投稿</button>
      </div>
    );
  }
}
