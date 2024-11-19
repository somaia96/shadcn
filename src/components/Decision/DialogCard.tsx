import { INewsApi } from "@/interfaces"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"
import CardNews from "../Card"

const DialogCard = ({ news }: { news: INewsApi }) => {
  return (
    <Dialog>
      <CardNews news={news as INewsApi} key={news.id} />
      <DialogContent className="sm:max-w-[425px] flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-primary">{news.title}</DialogTitle>
          <div className="text-center text-gray-800"> رقم القرار: {news.decision_id}</div>
          <DialogDescription className="text-center text-gray-800 font-medium">
            {news.description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default DialogCard
