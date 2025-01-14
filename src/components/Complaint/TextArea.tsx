import { Textarea } from "../ui/textarea"

interface IProps {
  errors: any
  register: any,
}
const TextArea = ({ errors, register }: IProps) => {
  return (
    <div className="space-y-1">
      <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
        مضمون الشكوى:<span className='text-red-900'>*</span>
      </label>
      <div>
        <Textarea
          {...register("description", { required: true })}
          id="description"
          name="description"
          placeholder='شرح طبيعة الشكوى أو المخالفة ...'
        />
        {errors.description && <span className="text-red-500 text-xs mx-1">لا يمكن ارسال الشكوى بدون نص الشكوى</span>}
      </div>
    </div>
  )
}

export default TextArea
