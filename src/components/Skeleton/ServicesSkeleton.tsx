import CardSkeleton from "./CardSkeleton"
import TabSkeleton from "./TabSkeleton"

const ServicesSkeleton = () => {
  return (
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
}

export default ServicesSkeleton
