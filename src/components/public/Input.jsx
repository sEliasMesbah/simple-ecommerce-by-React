import { useParams } from "react-router-dom"

export default function Input({id, label, type = 'text', ...props}){
   const params = useParams();
   
   return <>
      <div className="mb-3">
         {
            label && <label className="form-label" for={id}>
               {label}
               {
                  props.required && <span>*</span>
               }
            </label>
         }
         <input id={id} className={'form-control '+ props.classInput} type={type} {...props}/>
      </div>
   </>
}