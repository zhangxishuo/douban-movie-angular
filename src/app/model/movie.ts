import { Director } from "./director";

export class Movie {
    public id: string;
    public title: string;
    public images: object;
    public rating: {
        average: number,
        stars: number,
        details: {}
    };
    public genres: string[];
    public mainland_pubdate: string;
    public directors: Director[];
    public summary: string;
    public website: string;
    public languages: string[];

    constructor() {
    }
}