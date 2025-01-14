import { Skeleton } from "../ui/skeleton"
import CardSkeleton from "./CardSkeleton"
import TabSkeleton from "./TabSkeleton"

const ServicesSkeleton = ({ home = false }) => {
  return (
    <div className="my-10 container space-y-5">
      {home ? <div className="flex justify-between mt-10 mb-5">
        <Skeleton className="h-2.5 rounded-full w-32 mb-4" />
        <Skeleton className="h-2.5 rounded-full w-24 mb-4" />
      </div> :
        <div className="font-header font-bold text-center md:text-3xl text-primary">الخدمات</div>
      }
      <div className='flex items-center justify-center gap-4 my-3'>
        {Array.from({ length: 5 }).map((_, i) => <TabSkeleton key={i} />)}
      </div>
      <div className='grid md:grid-cols-2 gap-20'>
        {Array.from({ length: 4 }).map((_, i) => <CardSkeleton noPic={false} key={i} />)}
      </div>
    </div>
  )
}

export default ServicesSkeleton
