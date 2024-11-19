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
                    <div className="flex flex-col rounded-md shadow-sm w-full">
                        <input
                        {...register(`${name}`, { required: true})}
                            id={name}
                            name={name}
                            type={name === "number" ? "number":""}
                            placeholder={placeholder}
                            autoComplete={name}
                            className="bg-white block flex-1 rounded-lg px-3 py-1.5 placeholder:text-gray-400 sm:text-sm w-full sm:leading-6"
                        />
                         {errors[name] && <span className="text-red-500 text-sm">{"لا يمكن ارسال الشكوى بدون " + (name === "name" ? "الاسم" : "الرقم")} </span>}
                    </div>
                </div>
  )
}

export default Input
