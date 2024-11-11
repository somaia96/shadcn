const Header = () => {
    return <div className="md:container md:mt-5">
        <div className="h-[400px] md:rounded-[32px] border-0 md:overflow-hidden bg-bottom bg-cover bg-no-repeat bg-[url('/images/headerBG.jpg')]">
            <div className="bg-black h-full bg-opacity-50">
                <div className="container flex items-center justify-center md:justify-start h-full">
                    <div className="my-20 text-center md:text-start text-white w-full md:w-fit max-w-md">
                        <h1 className="text-4xl md:text-5xl font-medium mb-3">بلدية ضاحية الأسد</h1>
                        <p className="leading-normal text-sm md:text-xl">نعمل لخدمة المواطنين وتحسين الخدمات في المنطقة، والنهوض باقتصادها عبر دعم المشاريع الصغيرة، وحل كافة المشكلات عبر نظام معالجة الشكاوي الجديد</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Header
