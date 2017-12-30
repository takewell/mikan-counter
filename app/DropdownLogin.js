import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DrooddownLogin extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="success">
          ログイン
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="/auth/facebook">Facebook</DropdownItem>
          <DropdownItem href="/auth/twitter">Twitter</DropdownItem>
          <DropdownItem href="/auth/github">Github</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}