import React, { Component } from 'react';

class AppHeader extends Component {
  constructor(props) {
  super(props);
  this.state = { message: props.message };
}
  render() {
    return (
      <div className="App-header">
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default AppHeader;
