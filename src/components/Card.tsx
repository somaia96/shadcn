import { INewsApi } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
interface IProps {
  news: INewsApi,
  order?: number,
  noPic?: boolean,
}
export default function CardNews({ noPic = true, order = 0, news }: IProps) {
  if (!noPic) {
    news.photos = []
  }

  let timestamp = news.activity_date ? new Date(news.activity_date!) : new Date(news.created_at!);

  return (
    <Card className={(order != 0 ? "max-w-full md:max-w-[49%] " : "") + "flex flex-col md:flex-nowrap w-full max-w-[100%] p-3 md:gap-5 md:flex-row my-3"}>

      {noPic && <CardHeader
        className={(order != 0 ? "hidden md:block " : "") + " relative m-0 w-full lg:w-1/4 lg:shrink-0 lg:rounded-l-none"}
        style={order != 0 ? { order: order, marginRight: "auto" } : {}}
      >
        {news.photos && news.photos.length > 0 ? (
          <Dialog key={news.id}>
            <DialogTrigger>
              <img
                src={news.photos[0]}
                alt="card-image"
                className="lg:h-[224px] w-full object-cover"
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <img
                src={news.photos![0]}
                alt="card-image"
                className="h-auto w-full object-cover"
              />
            </DialogContent>
          </Dialog>
        ) : <img
          src={`/images/empty.jpg`}
          alt="card-image"
          className="lg:h-[224px] w-full object-cover"
        />}
      </CardHeader>}
      <CardContent className="flex flex-col lg:p-0 lg:py-6 lg:my-0">
        <CardTitle className="mb-4 text-xl text-primary uppercase">
          {news.title}
        </CardTitle>
        {timestamp && <CardDescription color="blue-gray" className="mb-2 text-sm text-gray-600">
          {timestamp.toUTCString()}
        </CardDescription>}
        <CardDescription color="gray" className="mb-3 text-base text-gray-900">
          {typeof (news.description) == "string" ? txtSlicer(news.description, (news.photos ? undefined : 250)) : <ol type="1" className="list-decimal list-inside text-gray-700">
            {news.description.map((item, i) => <li key={i}>{item}</li>)}</ol>}
        </CardDescription>
        {news.photos && news.photos?.length > 0 ? <div className="flex max-w-full justify-center items-center md:justify-start w-full gap-3 mb-5 md:mb-0 -order-1 md:order-12">
          {news.photos.map((img, i) => (
            <img className="w-auto h-14" key={i} src={img} />
          ))}
        </div> : null
        }
      </CardContent>
    </Card>
  );
}