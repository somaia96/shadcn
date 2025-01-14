import instance from '../../api/instance'
import { IComplaints } from '@/interfaces';
import { Toaster } from "../../components/ui/toaster"
import { useToast } from "../../hooks/use-toast"
import { Button } from "../../components/ui/button"
import Input from './Input';
import TextArea from './TextArea';
import InputFile from './InputFile';
import Toast from './Toast';
import { useForm, SubmitHandler } from "react-hook-form"
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';

export default function Form() {
    const { toast } = useToast();
    const { register, handleSubmit, reset , formState: { errors } } = useForm<IComplaints>()
    const {mutate , isSuccess, isError} = useMutation({
        mutationFn: (complaint:IComplaints) => {
          return instance.post('/complaint',complaint , {
            headers: { "Content-Type": "multipart/form-data" }
        })
        },
      });
      useEffect(() => {
        if (isSuccess) {
            Toast('تم ارسال الشكوى بنجاح 👏', "default", toast, "bg-blue-100");
            reset();
        }
        if (isError) {
            Toast('حدث خطأ أثناء ارسال الشكوى ✖', "destructive", toast);
        }
    }, [isSuccess, isError, toast, reset]);

    const onSubmit: SubmitHandler<IComplaints> = comData => {mutate(comData)};
  
    return (
        <form className='bg-[#F8F0E5] lg:w-5/12 p-3 rounded-xl'
            onSubmit={handleSubmit(onSubmit)}
        >
            <Toaster />
            <div className="space-y-2">
                <Input errors={errors} register={register} label="اسم مقدم الشكوى:" name="name" placeholder="الاسم و الكنية" />
                <Input errors={errors} register={register} label="رقم التواصل:" name="number" placeholder="مثال: 09XXXXXXXX" />
                <TextArea errors={errors} register={register} />
                <InputFile register={register} />
            </div>
            <Button variant="default" className="w-full my-3 font-semibold">
                ارسال الشكوى
            </Button>
        </form>
    )
}
