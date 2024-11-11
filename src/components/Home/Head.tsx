import { Link } from "react-router-dom"

type info = {
  title: string,
  link?: string,
}
const Head = ({ title, link }: info) => {
  return (
    <div className='flex py-5 items-center justify-between' dir='rtl'>
      <div className='flex-1'>
        <h2 className='font-bold text-primary text-xl'>{title}</h2>
      </div>
      {link && <Link className="hidden md:block" to={link} >
        <span className='text-primary border-primary font-bold border-b-2'>عرض المزيد</span>
      </Link>}
    </div>
  )
}

export default Head
