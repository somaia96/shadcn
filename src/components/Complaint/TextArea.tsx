interface IProps{
    errors:any
    register:any,
}
const TextArea = ({errors,register}:IProps) => {
  return (
    <div className="space-y-1">
    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
        مضمون الشكوى:<span className='text-red-900'>*</span>
    </label>
    <div>
        <textarea
        {...register("description", { required: true })}
            id="description"
            name="description"
            rows={2}
            placeholder='شرح طبيعة الشكوى أو المخالفة ...'
            className="block px-3 w-full rounded-md py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
         {errors.description && <span className="text-red-500 text-sm">لا يمكن ارسال الشكوى بدون نص الشكوى</span>}
    </div>
</div>
  )
}

export default TextArea
