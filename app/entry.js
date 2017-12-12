import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import ChartCanvas from './ChartCanvas';

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
