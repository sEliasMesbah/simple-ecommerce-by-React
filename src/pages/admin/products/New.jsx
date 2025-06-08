import React, { useEffect, useRef } from 'react'
import Input from '../baseComponent/Input'
import RefComponent from '../tools/RefComponent'
import useData from '../tools/data';

function NewProduct() {

  const simpleMessage = useRef('hello');

  const component = RefComponent();//{state: {ref: [], errors:{}, ...}, setState}
  const { saveData } = useData();

  const save = () => {
    saveData(component)
  }

  function logRef() {
    console.log(simpleMessage.current);

  }

  
  function change() {
    simpleMessage.current = 'bye';
    console.log(simpleMessage.current);
    
  }

  useEffect(() => {
    logRef()
  }, [])

  return (
    <div style={{ marginTop: '10rem' }}>
      <Input id={'name'} label={'name'} refItem={[component, 'name']} />
      <Input id={'description'} label={'description'} refItem={[component, 'description']} />
      <Input id={'price'} label={'price'} refItem={[component, 'price']} />
      <Input id={'offer'} label={'offer'} refItem={[component, 'offer']} />
      <button onClick={save}>save</button>
      <button onClick={change}>{simpleMessage.current}</button>
    </div>
  )
}

export default NewProduct
