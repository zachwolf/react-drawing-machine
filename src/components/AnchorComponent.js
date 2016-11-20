'use strict';

import React from 'react';

require('styles//Anchor.css');

class AnchorComponent extends React.Component {
  render() {
    return (
      <div className="anchor-component">
        Please edit src/components///AnchorComponent.js to update this component!
      </div>
    );
  }
}

AnchorComponent.displayName = 'AnchorComponent';

// Uncomment properties you need
// AnchorComponent.propTypes = {};
// AnchorComponent.defaultProps = {};

export default AnchorComponent;
