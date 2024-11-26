import CardNews from "../components/Card";
import { useState } from "react";
import { IDecisions, INewsApi } from "@/interfaces";
import instance from '../api/instance'
import Alerting from '../components/Complaint/Alert';
import { useQuery } from '@tanstack/react-query'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"
import Pagination from "../components/Pagination"
import DesicionSkeleton from "../components/Skeleton/DesicionSkeleton";
import { useSearchParams } from "react-router-dom";


const Decisions = () => {
  let [searchParams, setSearchParams] = useSearchParams({page:"1"});
  const [page, setPage] = useState(searchParams.get("page") ? +searchParams.get("page")! : 1);
  const [startIndex, setStartIndex] = useState((+searchParams.get("page")! - 1) * 3);
  const endIndex = startIndex + 3;
  const { isLoading, error, data } = useQuery({
    queryKey: ['decisionData'],
    queryFn: async () => {
      const { data } = await instance.get('/decision')
      return data
    }
  })

  const count = Math.ceil(data?.count / 3);

  if (isLoading) return <DesicionSkeleton/>

  if (error) return <Alerting />

  return (
    <div className="my-10 container">
      {data.data.slice(startIndex, endIndex).map((news: IDecisions) => (
        <Dialog key={news.id}>
          <CardNews news={news as INewsApi} />
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
      <div className="flex justify-items-center justify-center	">
        <Pagination page={page} setPage={setPage} searchParams={searchParams} setSearchParams={setSearchParams} endIndex={endIndex} count={count} setStartIndex={setStartIndex} />
      </div>
    </div>
  );
};

export default Decisions;
