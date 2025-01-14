export interface INavLink{
    id:number,
    link:string,
    text:string
}

export interface INewsApi{
    id:number,
    title:string,
    description:string,
    photos?:string[] | null,
    activity_date?:string,
    service_category_id?:number,
    activity_type_id?:number,
    created_at?:string,
    decision_id?:number,
}

export interface ITabs{
    id:number,
    name:string
}

export interface INews{
    id?:number,
    title:string,
    description:string,
    photos:string[],
    _method?:string,
}

export interface IServices{
    id:number,
    title:string,
    description:string,
    service_category_id:number,
}

export interface IEvents{
    id:number,
    title:string,
    description:string,
    activity_type_id:number,
    activity_date?:string,
    photos:string[],
}

export interface IComplaints{
      name: string,
      number: string,
      description: string,
      photos: File[],
}

export interface IDecisions{
   id: number,
      decision_id: number,
      decision_date: string,
      title: string,
      description: string,
      photos:string[],
}

export interface IMembers{
    id: number,
      name: string,
      job_title: string,
      description: string,
      photo: string,
}







