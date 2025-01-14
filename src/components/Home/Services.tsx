import Head from './Head'
import CardNews from '../Card';
import { Link } from "react-router-dom"
import { Button } from '../ui/button';
import {ITabs, IServices, INewsApi } from '@/interfaces';
import { txtSlicer } from '../../utils/functions';
import { useState } from 'react';
import ServicesSkeleton from '../Skeleton/ServicesSkeleton';
import { useQuery } from '@tanstack/react-query';
import instance from '../../api/instance';

const Services = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [tabId, setTabId] = useState(1)
  const tabs = useQuery({
    queryKey: ['HomeServices'],
    queryFn: async () => {
      const tabs = await instance.get('/service-categories');
      return tabs.data.data
    },
  })
  const {data , isLoading} = useQuery({
    queryKey: [`tabServData_${tabId}`],
    queryFn: async () => {
      const resSer = await instance.get(`/services?limit=4&service_category_id=${tabId}`);
      return resSer.data.data
    }
  })
  const handlActiveTabClick = (tab: number) => {
    setActiveTab(tab);
    setTabId(tab)
   };
   if (isLoading) return <ServicesSkeleton home={true}/>

  return (
    <div>
      <Head link='/services' title={"الخدمات المقدمة"} />
      <div className='flex lg:justify-center items-center gap-3 overflow-x-scroll py-4' style={{scrollbarColor:"transparent transparent"}}>
        {tabs?.data.map((tab:ITabs)=>(
          <Button 
          key={tab.id} 
          onClick={() => handlActiveTabClick(tab.id!)}
          variant={activeTab === tab.id
            ? "default"
            : "outline"}
          className='w-28 md:w-36 font-medium md:text-lg'>{txtSlicer(tab.name,12)}</Button>
        ))}
      </div>
      <div className='flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-between'>
        {data?.map((item:IServices) => <CardNews noPic={false} key={item.id} order={2} news={item as INewsApi} />)}
      </div>
      <Link className="flex justify-center md:hidden" to='/services' >
        <span className='w-fit text-primary font-bold border-primary border-b-2'>عرض المزيد</span>
      </Link>
    </div>
  )
}

export default Services
