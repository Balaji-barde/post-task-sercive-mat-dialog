export interface Imovies {
    id: string;
    title: string;
    genre: string;
    rating: number;
    releaseYear: number;
    isActive: boolean;
    image:string,
    
}

export interface IapiRes<T>{
       status: boolean
        msg:string
        data:T
}