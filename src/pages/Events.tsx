import CardNews from "../components/Card";
import { useState } from "react";
import { IEvents, INewsApi } from "@/interfaces";
import instance from '../api/instance'
import Alerting from '../components/Complaint/Alert';
import { useQuery } from '@tanstack/react-query'
import Pagination from "../components/Pagination"
import EventSkeleton from "../components/Skeleton/EventSkeleton";
import Tabs from "../components/Tabs";
import { useSearchParams } from "react-router-dom";

const Events = () => {
  let [searchParams, setSearchParams] = useSearchParams({ page: "1", tab: "1" });
  const [page, setPage] = useState(+searchParams.get("page")!);
  const [startIndex, setStartIndex] = useState((+searchParams.get("page")! - 1) * 3);
  const endIndex = startIndex + 3;
  const { isLoading, error, data } = useQuery({
    queryKey: ['activityData'],
    queryFn: async () => {
      const eventRes = await instance.get('/activity')
      const tabRes = await instance.get('/activity-type');
      return { eventRes, tabRes }
    }
  })

  const tabs = data?.tabRes.data.data;

  const [activeTab, setActiveTab] = useState<number>(+searchParams.get("tab")!);

  let filteredEvents = data?.eventRes.data.data;

  if (activeTab !== 1) {
    filteredEvents = filteredEvents?.filter((eveData: IEvents) => eveData.activity_type_id === activeTab);
  }
  const count = Math.ceil(filteredEvents?.length / 3);

  if (isLoading) return <EventSkeleton />

  if (error) return <Alerting />

  return (
    <div className="my-10 container">
      <div className="font-header md:text-3xl font-bold text-center text-primary">الفعاليات</div>
      <Tabs setPage={setPage} setStartIndex={setStartIndex} tabs={tabs} searchParams={searchParams} setSearchParams={setSearchParams} setActiveTab={setActiveTab} activeTab={activeTab} />
      {filteredEvents.slice(startIndex, endIndex).map((news: IEvents) => (
        <CardNews news={news as INewsApi} key={news.id} />
      ))}
      <Pagination page={page} setPage={setPage} searchParams={searchParams} setSearchParams={setSearchParams} endIndex={endIndex} count={count} setStartIndex={setStartIndex} />
    </div>
  );
};

export default Events;
