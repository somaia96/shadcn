import { txtSlicer } from "../utils/functions";
import { Button } from '../components/ui/button';
import { ITabs } from "@/interfaces";

interface IProps {
tabs:ITabs[];
setActiveTab:(val:number)=>void;
activeTab:number;

searchParams:URLSearchParams;
setSearchParams:(val:{})=>void;
}

const Tabs = ({ searchParams,setSearchParams,tabs,setActiveTab,activeTab}:IProps) => {
    const handlActiveTab = (tab: number) => {
        setActiveTab(tab);
        searchParams.set("tab",`${tab}`)
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
