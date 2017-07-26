import React, { Component } from 'react';

class AppIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0}
  }

  tick() {
    this.setState((prevState) => {
      console.log('tick');
      return {
        secondsElapsed: prevState.secondsElapsed + 1
      }
    });
  }

  componentDidMount() {
    //this.interval = setInterval(() => this.tick(), 1000);
    //console.log('mounted');
  }

  compponentWillUnmount() {
    //clearInterval(this.interval);
    console.log('unmounting');
  }

  render() {
    return (
      <p className="App-intro">
        A test to create a to do application, pure react
     </p>
    );
  }


}

export default AppIntro;
