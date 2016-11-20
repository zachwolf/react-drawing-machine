import React from 'react'

class Wheel extends React.Component {
  render() {
    this.props.context.fillStyle = 'red'
    this.props.context.rect(0, 0, 100, 100)
    this.props.context.fill()
    return null
  }
}

Wheel.displayName = 'Wheel'

// Uncomment properties you need
// Wheel.propTypes = {};
// Wheel.defaultProps = {};

export default Wheel
