import WhatsAppSvg from "../../assets/SVG/WhatsAppSvg"
import FacebookSvg from "../../assets/SVG/FacebookSvg"
import InstagramSvg from "../../assets/SVG/InstagramSvg"

const ContactText = () => {
    return (
        <div className="lg:w-7/12 text-gray-800">
            <h2 className="text-2xl text-primary font-bold mb-2"> نظام معالجة الشكاوي </h2>
            <div >
                <p className="font-medium mb-2">  حرصا منا على تأمين افضل الخدمات ومعالجة كافة المشاكل المتعلقة بحياه وراحة المواطنين .
                    نقدم لكم نظام معالجة الشكاوي لتسهيل وتسريع عملية معالجة الشكاوي.
                </p>
                <div>
                    <h3 className="font-bold">يرجى ملأ الطلب التالي بجميع المعلومات</h3>
                    <ol type="1" className="list-decimal list-inside text-gray-700">
                        <li><b>اسم ورقم مقدم الشكوى:</b> للتواصل معكم في حال وجود استفسارعن المشكلة أو المخالفة المقدمة</li>
                        <li><b> صور مرفقة:</b>لتأكيد حدوث المخالفة أو توضيح المشكلة المراد معالجتها  </li>
                        <li><b>  مضمون الشكوى:</b> شرح طبيعةالمخالفة أو المشكلة المراد معالجتها </li>
                    </ol>
                    جميع الخانات التي تتضمن <span className="text-red-900 font-bold">*</span> هي خانات ضرورية يجب تعبئتها لتستطيع ارسال الشكوى
                    <br />
                    <span className="text-red-900 font-bold text-lg"> تنويه :</span> في حال وجود نقص في احد البنود السابقة قد يتعرض الطلب لاتلاف.يرجى تقديم كافةالمعلومات المطلوبة
                </div>
            </div>
            <hr className="w-1/2 mx-auto my-3"/>
            <ul>
                <li className="font-semibold">العنوان :<span className="font-medium">دمشق-ضاحية الأسد جانب قسم الشرطة</span> </li>
                <li className="font-semibold">ايام الدوام :<span className="font-medium">يوميا من الاحد للخميس من 9الى2ضهرا</span> </li>
                <li className="font-semibold">رقم الهاتف :<span className="text-primary font-medium"> 0116669999</span> </li>
            </ul>

            <h3 className="text-gray-800 my-3 font-semibold">صفحاتنا على منصات التواصل الاجتماعي :</h3>
            <div className="flex gap-9 justify-center items-center">
                <a href="https://www.whatsapp.com"><WhatsAppSvg /></a>
                <a href="https://www.instagram.com"><InstagramSvg /></a>
                <a href="https://www.facebook.com"><FacebookSvg /></a>
            </div>
        </div>

    );
}
export default ContactText;