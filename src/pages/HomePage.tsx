import News from '../components/Home/News'
import Services from '../components/Home/Services'
import instance from '../api/instance'
import { useQuery } from '@tanstack/react-query'
import Alerting from '../components/Complaint/Alert';
import HomeSkeleton from '../components/Skeleton/HomeSkeleton';
import { useState } from 'react';

const HomePage = () => {
  const [tabId, setTabId] = useState(1)
  const { isLoading, error, data } = useQuery({
    queryKey: ['homeData'],
    queryFn: async () => {
      const resNew = await instance.get('/news?limit=2');
      const eventRes = await instance.get('/activity?limit=2')
      const tabEveRes = await instance.get('/activity-type');
      const resDes = await instance.get('/decision?limit=2');
      const tabSerRes = await instance.get('/service-categories');
      return { resNew, eventRes, tabEveRes, resDes, tabSerRes }
    },
  })

  const resSer = useQuery({
    queryKey: [`tabServData_${tabId}`],
    queryFn: async () => {
      const resSer = await instance.get(`/services?limit=4&service_category_id=${tabId}`);
      return resSer.data.data
    }
  })

  if (isLoading) return <HomeSkeleton />

  if (error) return <Alerting />

  return <div className="container">
    <News data={data?.resNew.data.data} title='أحدث الأخبار' link='/news' />
    <Services setTabId={setTabId} servicesData={resSer.data} serTabsData={data?.tabSerRes.data.data} />
    <News data={data?.eventRes.data.data} title='أحدث الفعاليات' link='/activeties' />
    <News data={data?.resDes.data.data} title='أحدث القرارات' link='/decisions' />
  </div>
}

export default HomePage
