import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import Counter from './Counter';
import DropdownLogin from './DropdownLogin';

class Console extends Component {
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

  render() {
    const itemsHtml = this.state.items.map(e => (
      <li>
        食べたみかんの数 : {e.count}
        <br />
        食べたときの気持ち : {e.body}
      </li>
    ));

    return (
      <div>
        <ul>{itemsHtml}</ul>
        <button onClick={e => this.loadLogs()}>読込</button>
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
        <Console />
      </div>
    );
  }
}

if (document.getElementById('dropdown')) {
  ReactDOM.render(<DropdownLogin />, document.getElementById('dropdown'));
};

ReactDOM.render(<App />, document.getElementById('app'));