import AboutImage from "/images/Image.png";
import Image1 from "/images/Image1.png";
import Image2 from "/images/Image2.png";
import Image3 from "/images/Image3.png";
import Members from "../components/AboutUs/Members";

function AboutUs() {
  let imgArr = [Image1, Image2, Image3]

  return (
    <>
      <div className="container my-5">
        <div className="aboutBody">
          <div className="font-bold text-primary text-2xl">
            عن المجلس
          </div>
          <div className="flex flex-col md:flex-row mt-4 gap-5">
            <div className="w-full lg:w-5/12 lg:order-1 order-2">
              <h3 className="text-lg font-bold  text-gray-800">التأسيس:</h3>
              <div className="text-justify text-sm text-gray-800">
                تأسس مجلس بلدية مدينتنا في عام 1950، ومنذ ذلك الحين، يعتبر ركيزة
                أساسية في تشكيل هوية المدينة وتوجهها. يضم المجلس مجموعة متنوعة من
                الأعضاء المنتخبين الملتزمين بخدمة المجتمع وتحسين جودة الحياة للسكان.
                على مر السنوات، قام المجلس بأداء مهامه بجدية ومسؤولية، حيث عمل على
                تطوير البنية التحتية للمدينة وتوفير الخدمات الأساسية للمجتمع. من
                خلال التخطيط الحكيم والتعاون مع الجهات المعنية، شهدت المدينة تحسنًا
                كبيرًا في مجالات مثل النقل العام، والصحة، والتعليم، والترفيه.
              </div>
              <h3 className="text-lg font-bold  text-gray-800">قطاع البلدية:</h3>
              <div className="text-justify text-sm text-gray-800">
                قطاع مجلس البلدية يلعب دورًا حيويًا في تقديم الخدمات الأساسية
                للمجتمع. يشمل القطاع تنظيم وإدارة النقل العام، وتوفير الرعاية
                الصحية، وصيانة البنية التحتية، وتنظيم الأنشطة الثقافية والترفيهية.
                يعمل فريق القطاع بكفاءة لتلبية احتياجات السكان وتحسين جودة حياتهم.
                بفضل جهود قطاع مجلس البلدية، تشهد المدينة تنمية مستدامة وتقدم متواصل
                في مختلف المجالات.
              </div>
              <h3 className="text-lg font-bold  text-gray-800">الرؤية:</h3>
              <div className="text-justify text-sm text-gray-800 ">
                تتمحور حول بناء مدينة مستدامة تتمتع بالتنمية الشاملة والتقدم
                الاقتصادي والاجتماعي. يهدف المجلس إلى توفير بنية تحتية متطورة،
                وتعزيز الخدمات العامة، وتشجيع الابتكار والريادة، وتعزيز روح المشاركة
                المجتمعية. من خلال رؤيته الطموحة، يسعى المجلس لخلق بيئة حضرية
                متناغمة ومستدامة توفر رفاهية وجودة حياة متميزة لجميع السكان.
              </div>
              <div className="text-lg font-bold  text-gray-800">الأهداف:</div>
              <div className="text-justify text-sm text-gray-800">
                تشمل تحسين جودة الحياة وتلبية احتياجات المجتمع من خلال توفير خدمات
                عالية الجودة وتعزيز التنمية الاقتصادية والاجتماعية وتعزيز المشاركة
                المجتمعية والاستدامة البيئية.
              </div>

            </div>
            <div className="w-full lg:w-7/12 lg:order-2 order-1">
              <img className="object-cover" src={AboutImage} />
              <div className="flex">
                {imgArr.map((img, i) => (
                  <div key={i}>
                    <img className="object-cover" src={img} />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        <Members />
      </div>
    </>
  );
}
export default AboutUs;
