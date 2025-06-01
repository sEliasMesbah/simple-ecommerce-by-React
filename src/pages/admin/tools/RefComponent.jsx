import React, { useState } from 'react'

function RefComponent({otherItems}) {
  let component = {};

  [component.state, component.setState] = useState({
    ref: [],
    errors: {},
    ...otherItems
  })

  return component;
}

export default RefComponent
