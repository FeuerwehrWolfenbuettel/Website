import { Picture } from "./picture";

export interface Article {
    id:number,
    title:string,
    pictures: Picture[],
    titlePicture: Picture,
    summary: string,
    text: string,
    tags: string[],
    date: Date,
    author: string
}