import CardNews from "../components/Card";
import { useState } from "react";
import { INews, INewsApi } from "@/interfaces";
import instance from '../api/instance'
import Alerting from '../components/Complaint/Alert';
import { useQuery } from '@tanstack/react-query'
import Pagination from "../components/Pagination"
import NewsSkeleton from "../components/Skeleton/NewsSkeleton";
import { useSearchParams } from "react-router-dom";

const NewsPage = () => {
  let [searchParams, setSearchParams] = useSearchParams({page:"1"});

  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + 3;
  const { isLoading, error, data } = useQuery({
    queryKey: ['newsData'],
    queryFn: async () => {
      const { data } = await instance.get('/news')
      return data
    }

  })
  const count = Math.ceil(data?.count/3);



  if (isLoading) return <NewsSkeleton/>

  if (error) return <Alerting />

  return (
    <div className="my-10 container">
      {data.data.slice(startIndex,endIndex).map((news: INews) => (
        <CardNews news={news as INewsApi} key={news.id} />
      ))}
         
      <Pagination searchParams={searchParams} setSearchParams={setSearchParams} endIndex={endIndex} count={count} setStartIndex={setStartIndex} />
    </div>
  );
};

export default NewsPage;
