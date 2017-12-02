import React from 'react';
import ReactDOM from 'react-dom';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.countUp = this.countUp.bind(this);
    this.unDo = this.unDo.bind(this);
    this.reSet = this.reSet.bind(this);
  }
  countUp() {
    this.setState({
      count: this.state.count + 1
    });
  }
  unDo() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  }
  reSet() {
    this.setState({
      count: 0
    });
  }
  render() {
    return (
      <div>
        <p>counter: {this.state.count}</p>
        <button onClick={this.countUp}>カウント</button>
        <button onClick={this.unDo}>戻る</button>
        <button onClick={this.reSet}>リセット</button>
      </div>
    );
  }
}

ReactDOM.render( 
  <CounterApp /> ,
  document.getElementById('app')
);