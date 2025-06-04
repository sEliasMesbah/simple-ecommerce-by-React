import React from 'react'
import Input from '../baseComponent/Input'
import RefComponent from '../tools/RefComponent'

function NewProduct() {

    const component = RefComponent();//{state: {ref: [], errors:{}, ...}, setState}

    
    
  return (
    <div>
      <Input id={'name'} refItem={[component, 'name']}  />
      <Input id={'description'} refItem={[component, 'description']}  />
      {/* <Input id={'price'} refItem={[component, 'price']}  />
      <Input id={'offer'} refItem={[component, 'offer']}  /> */}
    </div>
  )
}

export default NewProduct
