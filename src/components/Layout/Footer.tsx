import FacebookSvg from "../../assets/SVG/FacebookSvg"
import InstagramSvg from "../../assets/SVG/InstagramSvg"
import TelegramSvg from "../../assets/SVG/TelegramSvg"

const Footer = () => {
  return (
    <footer className="text-white bg-primary py-10">
      <div className="container flex flex-col md:flex-row justify-center items-center md:items-start gap-10 w-full text-base text-[#F3F3F3]">
        <div className="flex-1 flex flex-col justify-center items-center text-center md:text-start md:items-start gap-2">
          <h2 className="text-2xl">
            مجلس بلدية ضاحية الأسد
          </h2>
          <p>
            جميع الحقوق محفوظة لبلدية ضاحية الأسد 2024
            تشرف البلدية على إدارة الموقع
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-center md:text-start md:items-start gap-2">
          <h3 className="text-lg">
            سياسات الموقع:
          </h3>
          <span>
            الشروط والأحكام
          </span>
          <span>
            الحماية والخصوصية
          </span>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-center md:text-start md:items-start gap-2 px-3">
          <h3 className="text-lg">
            الوصول لبلدية ضاحية الأسد باستعمال<br />
            Google map
          </h3>
          <div className="rounded-lg border overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.49638608355065!2d36.356415138279495!3d33.58009990823834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518ef4f59cdd34d%3A0xa6e95d190172968d!2z2LbYp9it2YrYqSDYp9mE2KPYs9iv2Iwg2LPZiNix2YrYpw!5e0!3m2!1sar!2sro!4v1728100154011!5m2!1sar!2sro"
              width="auto" height="auto" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-center md:text-start md:items-start gap-2">
          <h3 className="text-lg">
            يمكنكم متابعتنا على وسائل التواصل الإجتماعي:
          </h3>
          <div className="flex items-center gap-5">
            <TelegramSvg />
            <InstagramSvg />
            <FacebookSvg />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
