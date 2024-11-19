import { PhotoIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const InputFile = ({ register }: { register: any }) => {
    const [reader, setReader] = useState("")

    return (
        <div className="space-y-1">
            <label htmlFor="photos" className="block text-sm font-medium leading-6 text-gray-900">
                الصور المرفقة :
            </label>
            <div className="bg-white flex justify-center rounded-lg px-6 py-3">
                {reader ? <div className='relative h-44'>
                    <img className='w-auto h-full' src={reader} alt='upload' /><span
                        onClick={() => setReader("")}
                        className='text-red-900 cursor-pointer font-semibold text-xl absolute right-2 top-0'>x</span>
                </div> :
                    <div className="text-center">
                        <div className="items-center justify-center flex text-xs leading-6 text-gray-600">
                            <label
                                htmlFor="photos"
                                className="relative cursor-pointer rounded-md font-semibold"
                            >
                                <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                                <span>اضغط لإضافة صور أو اسحب الصور وافلت هنا</span>
                                <input
                                    {...register("photos")}
                                    id="photos"
                                    name="photos"
                                    accept="image/*"
                                    type="file"
                                    className="sr-only" />
                                <p className="text-xs font-semibold leading-6 text-gray-600">يجب ألا يتجاوز حجم الصورة 2 ميغابايت وعدد الصور 1</p>
                            </label>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default InputFile
