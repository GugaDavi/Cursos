'use strict'

import React from 'react'

import Button from './Button/button'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      checked: false
    }
  }
  render () {
    return (
      <div>
        <Button>Butão</Button>
      </div>
    )
  }
}

export default App
