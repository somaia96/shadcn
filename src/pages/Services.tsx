import CardNews from '../components/Card';
import { useState } from "react";
import { INewsApi, IServices } from "@/interfaces";
import Alerting from '../components/Complaint/Alert';
import instance from '../api/instance'
import { useQuery } from '@tanstack/react-query'
import Pagination from "../components/Pagination"
import ServicesSkeleton from '../components/Skeleton/ServicesSkeleton';
import Tabs from '../components/Tabs';
import { useSearchParams } from 'react-router-dom';

const Services = () => {
  let [searchParams, setSearchParams] = useSearchParams({page:"1",tab:"1"});

  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + 4;
  const { isLoading, error, data } = useQuery({
    queryKey: ['serviceData'],
    queryFn: async () => {
      const serviceRes = await instance.get('/services')
      const tabRes = await instance.get('/service-categories');
      return { serviceRes, tabRes }
    }
  })

  const tabs = data?.tabRes.data.data;

  const [activeTab, setActiveTab] = useState<number>(1);


  let filteredEvents = data?.serviceRes.data.data;

  if (activeTab !== 1) {
    filteredEvents = filteredEvents.filter((newData: IServices) => newData.service_category_id === activeTab);
  }
  const count = Math.ceil(filteredEvents?.length / 4);

  if (isLoading) return <ServicesSkeleton />

  if (error) return <Alerting />

  return (
    <div className='container my-5'>
      <div className="font-header font-bold text-center md:text-3xl text-primary">الخدمات</div>
      <Tabs tabs={tabs} searchParams={searchParams} setSearchParams={setSearchParams} setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className='flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-between'>
        {filteredEvents.slice(startIndex, endIndex).map((item: IServices) => {
          return <CardNews noPic={false} key={item.id} order={2} news={item as INewsApi} />
        })}
      </div>
      <Pagination searchParams={searchParams} setSearchParams={setSearchParams} endIndex={endIndex} size={4} count={count} setStartIndex={setStartIndex} />
    </div>
  )
}

export default Services