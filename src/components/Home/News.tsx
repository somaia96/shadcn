import { Link } from "react-router-dom"
import Head from "./Head"
import CardNews from "../Card"
import { INews, INewsApi } from "@/interfaces";
interface IProps {
  newsInfo: INews[],
  title: string,
  link?: string,
  modal?:boolean,
}
const News = ({modal=false,newsInfo,title, link}:IProps) => {
  let ArrNews = newsInfo.slice(0, 2);
  return (
    <div className="my-10">
      <Head link={link} title={title} />
      {ArrNews.map((news) => <CardNews modal={modal} news={news as INewsApi} key={news.id} />)}
      {link && <Link className="flex justify-center md:hidden" to={link} >
        <span className='w-fit text-primary font-bold border-primary border-b-2'>عرض المزيد</span>
      </Link>}
    </div>
  )
}

export default News
