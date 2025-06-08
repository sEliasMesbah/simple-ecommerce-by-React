import { useRef, useState } from 'react'

function RefComponent() {
  let component = {};

  [component.state, component.setState] = useState({
    refs: useRef([]),
    errors: {}
  })

  return component;
}

export default RefComponent
