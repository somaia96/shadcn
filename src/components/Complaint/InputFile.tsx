import { PhotoIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'
import { useWatch, Control } from 'react-hook-form'
import { Input as Inputs } from "../ui/input"

interface InputFileProps {
    register: any;
    control: Control<any>; 
}

const InputFile = ({ register, control }: InputFileProps) => {
    const [reader, setReader] = useState<string>("")

    const photosValue = useWatch({
        control,
        name: "photos"
    });

    useEffect(() => {
        if (!photosValue || photosValue.length === 0) {
            setReader("");
        }
    }, [photosValue]);

    const { onChange, ...photosRegister } = register("photos");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }

        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const fileReader = new FileReader();
            
            fileReader.onloadend = () => {
                setReader(fileReader.result as string);
            };
            
            fileReader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-1">
            <label htmlFor="photos" className="block text-sm font-medium leading-6 text-gray-900">
                الصور المرفقة :
            </label>
            <div className="bg-white flex justify-center rounded-lg px-6 py-3">
                {reader ? (
                    <div className='relative h-44'>
                        <img className='w-auto h-full rounded-md object-cover' src={reader} alt='upload' />
                        <span
                            onClick={() => setReader("")}
                            className='text-red-900 cursor-pointer font-semibold text-xl absolute right-2 top-0 bg-white/80 px-1.5 rounded-full shadow-sm'
                        >
                            ×
                        </span>
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="items-center justify-center flex text-xs leading-6 text-gray-600">
                            <label
                                htmlFor="photos"
                                className="relative cursor-pointer rounded-md font-semibold"
                            >
                                <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                                <span>اضغط لإضافة صور أو اسحب الصور وافلت هنا</span>
                                <Inputs
                                    {...photosRegister}
                                    onChange={handleFileChange}
                                    id="photos"
                                    accept="image/*"
                                    type="file"
                                    className="sr-only"
                                />
                                <p className="text-xs font-semibold leading-6 text-gray-600 mt-2">
                                    يجب ألا يتجاوز حجم الصورة 2 ميغابايت وعدد الصور 1
                                </p>
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InputFile