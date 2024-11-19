import CardSkeleton from './CardSkeleton'
import TabSkeleton from './TabSkeleton'

const EventSkeleton = () => {
  return (
    <div className="my-10 container space-y-5">
      <div className="font-header md:text-3xl font-bold text-center text-primary">الفعاليات</div>
      <div className='flex items-center justify-center gap-4 my-3'>
        {Array.from({ length: 5 }).map((_, i) => <TabSkeleton key={i} />)}
      </div>
      {Array.from({ length: 5 }).map((_, i) => <CardSkeleton key={i} />)}
    </div>
  )
}

export default EventSkeleton
