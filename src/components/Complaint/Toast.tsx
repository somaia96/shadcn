
const Toast = (title:string,variant:"default" | "destructive" | null | undefined,toast:({})=>void,bg:string="") => {
  return toast({
    variant: variant,
    title:title,
    className: `${bg} flex justify-center`,
    duration:1500,
    dir:"rtl",
})
}

export default Toast
