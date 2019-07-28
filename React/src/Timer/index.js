'use strict';

import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super()
    this.state = {
      timer: 0
    }
    this.time
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 })
    }, 1000)
  }

  render() {
    return <div>Timer: {this.state.timer}</div>
  }
}

export default Timer;
