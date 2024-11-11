import CardSkeleton from "./CardSkeleton"
import { Skeleton } from "../ui/skeleton"

const HomeSkeleton = () => {
    return (
        <div>
            {Array.from({ length: 4 }).map((_, i) => {
                return (
                    <div key={i}>
                        <div className="flex justify-between mt-10 mb-5">
                            <Skeleton className="h-2.5 rounded-full w-32 mb-4"/>
                            <Skeleton className="h-2.5 rounded-full w-24 mb-4"/>
                        </div>
                        <div className="space-y-5">
                            {Array.from({ length: 2 }).map((_, i) => <CardSkeleton key={i} />)}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HomeSkeleton
