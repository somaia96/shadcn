import News from '../components/Home/News'
import Services from '../components/Home/Services'
import instance from '../api/instance'
import { useQuery } from '@tanstack/react-query'
import Alerting from '../components/Complaint/Alert';
import HomeSkeleton from '../components/Skeleton/HomeSkeleton';

const HomePage = () => {
  const homeDataNews = useQuery({
    queryKey: ['homeDataNews'],
    queryFn: async () => {
      const {data} = await instance.get('/news?limit=2');
      return  data.data
    },
  })
  const homeDataActive = useQuery({
    queryKey: ['homeDataActive'],
    queryFn: async () => {
      const {data} = await instance.get('/activity?limit=2')
      return data.data
    },
  })
  const homeDataDes = useQuery({
    queryKey: ['homeDataDes'],
    queryFn: async () => {
      const {data} = await instance.get('/decision?limit=2');
      return  data.data
    },
  })

  if (homeDataNews.isLoading) return <HomeSkeleton />

  if (homeDataNews.error||homeDataActive.error||homeDataDes.error) return <Alerting />

  return <div className="container">
    <News data={homeDataNews.data} title='أحدث الأخبار' link='/news' />
    <Services />
    <News data={homeDataActive.data} title='أحدث الفعاليات' link='/activeties' />
    <News data={homeDataDes.data} title='أحدث القرارات' link='/decisions' />
  </div>
}

export default HomePage
