export class Movie {
    public title: string;
    public images: object;

    constructor(title: string, images: object) {
        this.title = title;
        this.images = images;
    }
}