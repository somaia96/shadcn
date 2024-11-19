import CardSkeleton from "./CardSkeleton"

const NewsSkeleton = () => {
  return (
    <div className="my-10 container space-y-5">
      {Array.from({length:5}).map((_,i)=><CardSkeleton key={i} />)}
    </div>
  )
}

export default NewsSkeleton
