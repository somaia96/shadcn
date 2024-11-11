import CardNews from '../components/Card';
import { useState } from "react";
import { INewsApi, IServices } from "@/interfaces";
import { Button } from '../components/ui/button';
import Alerting from '../components/Complaint/Alert';
import instance from '../api/instance'
import { useQuery } from '@tanstack/react-query'
import { txtSlicer } from '../utils/functions';
import CardSkeleton from '../components/Skeleton/CardSkeleton';
import TabSkeleton from '../components/Skeleton/TabSkeleton';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination"

interface IEventTabs {
  id: number,
  name: string,
}
const Services = () => {

  const [page, setPage] = useState(1);
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
  
  const count = Math.ceil(data?.serviceRes.data.count/4);
  const [activeTab, setActiveTab] = useState<number>(1);
  const handlActiveTabClick = (tab: number) => {
    console.log(typeof(tab));
    
    setActiveTab(tab);
  };

  const handleChangePage =(e,item:number)=>{
    e.target.setAttribute("isActive","");
    if(endIndex == count)return;
    setStartIndex((item - 1)*4);
    setPage(item)
  }
  let filteredEvents = data?.serviceRes.data.data;
  if (activeTab !== 1) {
    console.log(typeof(activeTab),typeof(filteredEvents[0].service_category_id));
    
    filteredEvents = filteredEvents.filter((newData: IServices) => newData.service_category_id === activeTab);
  }

  if (isLoading) return (
    <div className="my-10 container space-y-5">
      <div className="font-header font-bold text-center md:text-3xl text-primary">الخدمات</div>
      <div className='flex items-center justify-center gap-4 my-3'>
        {Array.from({ length: 5 }).map((_, i) => <TabSkeleton key={i} />)}
      </div>
      <div className='grid md:grid-cols-2 gap-20'>
        {Array.from({ length:4}).map((_, i) => <CardSkeleton noPic={false} key={i} />)}
      </div>
    </div>
  )

  if (error) return <Alerting />
  return (
    <div className='container my-5'>
      <div className="font-header font-bold text-center md:text-3xl text-primary">الخدمات</div>
      <div className='flex lg:justify-center items-center gap-3 overflow-x-scroll my-2' style={{ scrollbarColor: "transparent transparent" }}>
        {tabs.map((tab: IEventTabs) => (
          <Button key={tab.id}
            onClick={() => handlActiveTabClick(tab.id)}
            className={(activeTab === tab.id
              ? "active-button"
              : "disabled-button") + ' w-28 md:w-36 border-0 focus-visible:ring-0 py-1 text-primary hover:text-white bg-white hover:bg-primary md:text-lg'}>{txtSlicer(tab.name, 12)}</Button>
        ))}
      </div>
      <div className='flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-between'>
        {filteredEvents.slice(startIndex,endIndex).map((item: IServices) => {
          return <CardNews noPic={false} key={item.id} order={2} news={item as INewsApi} />})}
      </div>
      <div className="flex justify-items-center justify-center	">
       
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className="cursor-pointer"  onClick={()=>{if(page === 1)return;setPage(prev=>prev - 1);setStartIndex(prev=>prev - 4)}}/>
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
                    <PaginationLink className={page > count - 3 ? "hidden" : "cursor-pointer"} onClick={()=>{setPage(count);setStartIndex((count - 1)*4)}}>
                      {count}
                    </PaginationLink>
                  </PaginationItem>
            <PaginationItem>
              <PaginationNext className="cursor-pointer" onClick={()=>{if(page === count)return;setPage(prev=>prev + 1);setStartIndex(prev=>prev + 4)}}/>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default Services