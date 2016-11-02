import React, { Children, cloneElement } from 'react'

require('styles//Canvas.css')

class Canvas extends React.Component {
  componentDidMount() {
    this._setWindowSize()
    this._bindWindowEvents()
    this.setState({
      context: this.canvas.getContext('2d')
    })
  }

  componentWillUnmount() {
    this._unbindWindowEvents()
  }

  state = {
    height: NaN,
    width: NaN,
    context: null
  }

  render() {
    const canvas = this._renderCanvas()
    const { context } = this.state

    return (
      <div>
        { canvas }
        { context && Children.map(this.props.children, child => cloneElement(child, { context })) }
      </div>
    )
  }

  _renderCanvas () {
    const { height, width } = this.state

    return (
      <canvas
        height={ height }
        width={ width }
        ref={ canvas => this.canvas = canvas }/>
    )
  }

  _bindWindowEvents () {
    window.addEventListener('resize', () => this._setWindowSize())
  }

  _unbindWindowEvents () {
    window.removeEventListner('resize')
  }

  _setWindowSize () {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }
}

// Uncomment properties you need
// Canvas.propTypes = {}
// Canvas.defaultProps = {}

export default Canvas
