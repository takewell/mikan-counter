import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import Counter from './Counter';
import DropdownLogin from './DropdownLogin';
import MikanTable from './MikanTable';
import PreApp from './PreApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Counter />
        <MikanTable />
      </div>
    );
  }
}

if (document.getElementById('dropdown')) {
  ReactDOM.render(<DropdownLogin />, document.getElementById('dropdown'));
};

if (document.getElementById('preapp')) {
  ReactDOM.render(<PreApp />, document.getElementById('preapp'));
};

ReactDOM.render(<App />, document.getElementById('app'));