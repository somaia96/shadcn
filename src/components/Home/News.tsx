import { Link } from "react-router-dom"
import Head from "./Head"
import { INewsApi } from "@/interfaces";
import DialogCard from "../Decision/DialogCard";
import { Button } from "../ui/button";

interface IProps {
  data: INewsApi[],
  title: string,
  link: string,
}

const News = ({ data, title, link }: IProps) => {
  return (
    <div className="my-10">
      <Head link={link} title={title} />
      {data.map(news => <DialogCard news={news} key={news.id} />)}
      <Link className="flex justify-center md:hidden" to={link} >
        <Button variant={"link"} className="font-bold text-md">عرض المزيد</Button>
      </Link>
    </div>
  )
}

export default News
