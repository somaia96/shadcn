import Head from './Head'
import CardNews from '../Card';
import { Link } from "react-router-dom"
import { Button } from '../ui/button';
import {ITabs, IServices, INewsApi } from '@/interfaces';
import { txtSlicer } from '../../utils/functions';
import { useState } from 'react';
interface IProps {
  servicesData: IServices[],
  serTabsData:ITabs[],
  setTabId:(val:number)=>void,
}
const Services = ({setTabId,servicesData,serTabsData}:IProps) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handlActiveTabClick = (tab: number) => {
    setActiveTab(tab);
    setTabId(tab)
   };

  return (
    <div>
      <Head link='/services' title={"الخدمات المقدمة"} />
      <div className='flex lg:justify-center items-center gap-3 overflow-x-scroll mb-2' style={{scrollbarColor:"transparent transparent"}}>
        {serTabsData.map((tab)=>(
          <Button 
          key={tab.id} 
          onClick={() => handlActiveTabClick(tab.id!)}
          className={(activeTab === tab.id
            ? "active-button"
            : "disabled-button") +  ' w-28 md:w-36 border-0 focus-visible:ring-0 py-1 text-primary hover:text-white bg-white hover:bg-primary md:text-lg'}>{txtSlicer(tab.name,12)}</Button>
        ))}
      </div>
      <div className='flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-between'>
        {servicesData?.map((item) => <CardNews noPic={false} key={item.id} order={2} news={item as INewsApi} />)}
      </div>
      <Link className="flex justify-center md:hidden" to='/services' >
        <span className='w-fit text-primary font-bold border-primary border-b-2'>عرض المزيد</span>
      </Link>
    </div>
  )
}

export default Services
