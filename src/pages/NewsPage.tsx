import CardNews from "../components/Card";
import { useState } from "react";
import { INews, INewsApi } from "@/interfaces";
import instance from '../api/instance'
import Alerting from '../components/Complaint/Alert';
import { useQuery } from '@tanstack/react-query'
import CardSkeleton from "../components/Skeleton/CardSkeleton";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination"

const NewsPage = () => {

  const [page, setPage] = useState(1);
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

const handleChangePage =(e,item:number)=>{
  e.target.setAttribute("isActive","");
  if(endIndex == count)return;
  setStartIndex((item - 1)*3);
  setPage(item)
}

  if (isLoading) return (
    <div className="my-10 container space-y-5">
      {Array.from({length:5}).map((_,i)=><CardSkeleton key={i} />)}
    </div>
  )

  if (error) return <Alerting />

  return (
    <div className="my-10 container">
      {data.data.slice(startIndex,endIndex).map((news: INews) => (
        <CardNews news={news as INewsApi} key={news.id} />
      ))}
      <div className="flex justify-items-center justify-center	">
          
      <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className="cursor-pointer"  onClick={()=>{if(page === 1)return;setPage(prev=>prev - 1);setStartIndex(prev=>prev - 3)}}/>
            </PaginationItem>
            {
              Array.from(Array(count + 1).keys()).slice(page <= count - 2?page:page - 2,page +3).map((item,i) => {
                return (
                  <PaginationItem key={i}>
                    <PaginationLink isActive={page == item ? true : false} className="cursor-pointer" onClick={e=>handleChangePage(e,item)}>
                      {item}
                    </PaginationLink>
                  </PaginationItem>
                )
              })
            }
            <PaginationItem className={page >= count - 3 ? "hidden" : ""}>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
                    <PaginationLink className={page > count - 3 ? "hidden" : "cursor-pointer"} onClick={()=>{setPage(count);setStartIndex((count - 1)*3)}}>
                      {count}
                    </PaginationLink>
                  </PaginationItem>
            <PaginationItem>
              <PaginationNext className="cursor-pointer" onClick={()=>{if(page === count)return;setPage(prev=>prev + 1);setStartIndex(prev=>prev + 3)}}/>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default NewsPage;
