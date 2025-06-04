import React, { useState } from 'react'

function RefComponent() {
  let component = {};

  [component.state, component.setState] = useState({
    ref: [],
    errors: {}
  })

  return component;
}

export default RefComponent
