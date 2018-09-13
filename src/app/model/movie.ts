import { Director } from "./director";

export class Movie {
    public id: string;
    public title: string;
    public images: object;
    public rating: object;
    public genres: string[];
    public mainland_pubdate: string;
    public directors: Director[];

    constructor() {
    }
}