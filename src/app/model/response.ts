import { Movie } from "./movie";

export class Response {
    public count: number;
    public start: number;
    public subjects: Movie[];
    public title: string;
    public total: number;

    constructor() {
    }
}