import { Link } from "react-router-dom"
import { Button } from "../ui/button"

type IProps = {
  title: string,
  link: string,
}
const Head = ({ title, link }: IProps) => {
  return (
    <div className='flex py-5 items-center justify-between' dir='rtl'>
      <div className='flex-1'>
        <h2 className='font-bold text-primary text-xl'>{title}</h2>
      </div>
      <Link className="hidden md:block" to={link} >
        <Button
          variant={"link"}
          className="font-bold text-md"
        >عرض المزيد</Button>
      </Link>
    </div>
  )
}

export default Head
