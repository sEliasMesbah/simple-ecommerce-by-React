
export default function CreateRefComponent() {
    const crf = (refItem) => {
        // console.log(refItem);
        
        //el => [component, 'email']
        let  {state, setState} = refItem[0];

        let newRef = state.refs;
        newRef.current[refItem[1]] = refItem[0];

        // return refItem[1];
        

    }

    return crf;
}
