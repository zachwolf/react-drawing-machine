require('normalize.css/normalize.css')
require('styles/App.css')

import React from 'react'
import Canvas from './CanvasComponent'
import Wheel from './WheelComponent'
import Pivot from './PivotComponent'
import Anchor from './AnchorComponent'

class App extends React.Component {
  render() {
    return (
      <Canvas>
        <Wheel initialX={ 100 } initalY={ 100 }>
          <Pivot />
          <Anchor />
        </Wheel>
        <Wheel initialX={ 200 } initalY={ 100 }>
        </Wheel>
        <Wheel initialX={ 200 } initalY={ 250 }>
        </Wheel>
      </Canvas>
    )
  }
}

App.defaultProps = {
}

export default App
