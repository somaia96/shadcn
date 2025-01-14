import { txtSlicer } from "../utils/functions";
import { Button } from '../components/ui/button';
import { ITabs } from "@/interfaces";

interface IProps {
  tabs: ITabs[];
  setActiveTab: (val: number) => void;
  activeTab: number;
  setStartIndex: (val: ((prev: number) => number) | number) => void
  searchParams: URLSearchParams;
  setSearchParams: (val: {}) => void;
  setPage:(val:((value:number)=>number)|number)=>void;
}

const Tabs = ({setPage, setStartIndex, searchParams, setSearchParams, tabs, setActiveTab, activeTab }: IProps) => {
  const handlActiveTab = (tab: number) => {
    setStartIndex(0);
    setActiveTab(tab);
    setPage(1);
    searchParams.set("tab", `${tab}`)
    searchParams.set("page", `1`);
    setSearchParams(searchParams)
  };

  return (
    <div className='flex lg:justify-center items-center gap-3 overflow-x-scroll my-2' style={{ scrollbarColor: "transparent transparent" }}>
      {tabs.map((tab: ITabs) => (
        <Button key={tab.id}
          onClick={() => handlActiveTab(tab.id)}
          variant={activeTab === tab.id
            ? "default"
            : "outline"}
          className='w-28 md:w-36 font-medium md:text-lg'>{txtSlicer(tab.name, 12)}</Button>
      ))}
    </div>
  )
}

export default Tabs
