require('normalize.css/normalize.css')
require('styles/App.css')

import React from 'react'
import Canvas from './CanvasComponent'
import Wheel from './WheelComponent'

class App extends React.Component {
  render() {
    return (
      <Canvas>
        <Wheel />
        <Wheel />
        <Wheel />
      </Canvas>
    )
  }
}

App.defaultProps = {
}

export default App
