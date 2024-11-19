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

export default function Form() {
    const { toast } = useToast()
    const { register, handleSubmit, formState: { errors } } = useForm<IComplaints>()
    const onSubmit: SubmitHandler<IComplaints> = async (comData) => {
        try {
            let res = await instance.post('/complaint', comData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            (res.status === 200 || res.status === 201) ?
                Toast('تم ارسال الشكوى بنجاح 👏', "default", toast, "bg-blue-100") : null;
        } catch (error) {
            console.error('Error fetching news:', error);
            Toast('حدث خطأ أثناء ارسال الشكوى', "destructive", toast)
        }
    };

    return (
        <form className='bg-[#F8F0E5] lg:w-5/12 p-3 rounded-xl'
            onSubmit={handleSubmit(onSubmit)}
        >
            <Toaster />
            <div className="space-y-2">
                <Input errors={errors} register={register} label="اسم مقدم الشكوى:" name="name" placeholder="الاسم و الكنية" />
                <Input errors={errors} register={register} label="رقم التواصل:" name="number" placeholder="هاتف ثابت أو موبايل" />
                <TextArea errors={errors} register={register} />
                <InputFile register={register} />
            </div>
            <Button variant="default" className="w-full my-3 font-semibold">
                ارسال الشكوى
            </Button>
        </form>
    )
}
