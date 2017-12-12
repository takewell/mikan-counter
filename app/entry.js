import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import request from 'superagent'
import ChartCanvas from './ChartCanvas';

class Counter extends Component {
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
      .get('/api/count')
      .query({
        count: this.state.count
      })
      .end((err, data) => {
        if (err) {
          console.error(err);
        }
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
        <input type="text" value={this.state.body} size="60" onChange={e => this.bodyChanged(e)} />
        <br />
        <button onClick={e => this.post()}>投稿</button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Counter />
        <ChartCanvas />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
