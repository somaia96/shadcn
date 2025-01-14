import { Input as Inputs } from "../ui/input"

interface IProps{
    placeholder:string;
    name:string;
    label:string;
    register:any;
    errors:any;
}
const Input = ({errors,placeholder,name,label,register}:IProps) => {
  return (
    <div className="space-y-1">
                    <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                        {label}<span className='text-red-900'>*</span>
                    </label>
                    <div className="flex flex-col rounded-md w-full">
                      <Inputs 
                      {...register(`${name}`, { required: true})}
                      id={name}
                      name={name}
                      type={name === "number" ? "number":""}
                      placeholder={placeholder}
                      autoComplete={name}
                      />
                         {errors[name] && <span className="text-red-500 mx-1 mt-1 text-xs">{"لا يمكن ارسال الشكوى بدون " + (name === "name" ? "الاسم" : "الرقم")} </span>}
                    </div>
                </div>
  )
}

export default Input
