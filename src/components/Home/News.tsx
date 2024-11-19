import { Link } from "react-router-dom"
import Head from "./Head"
import CardNews from "../Card"
import { INewsApi } from "@/interfaces";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog"
interface IProps {
  newsInfo: INewsApi[],
  title: string,
  link?: string,
}
const News = ({newsInfo,title, link}:IProps) => {
  let ArrNews = newsInfo.slice(0, 2);
  return (
    <div className="my-10">
      <Head link={link} title={title} />
      {ArrNews.map((news) => (
        
        <Dialog key={news.id}>
          <CardNews news={news as INewsApi} key={news.id} />
          <DialogContent className="sm:max-w-[425px] flex flex-col items-center">
            <DialogHeader>
              <DialogTitle className="text-primary">{news.title}</DialogTitle>
              <div className="text-center text-gray-800"> رقم القرار: {news.decision_id}</div>
              <DialogDescription className="text-center text-gray-800 font-medium">
                {news.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
      {link && <Link className="flex justify-center md:hidden" to={link} >
        <span className='w-fit text-primary font-bold border-primary border-b-2'>عرض المزيد</span>
      </Link>}
    </div>
  )
}

export default News
