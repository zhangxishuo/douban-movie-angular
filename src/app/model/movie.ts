export class Movie {
    public title: string;
    public images: object;
    public rating: object;

    constructor(title: string,
                images: object,
                rating: object) {
        this.title = title;
        this.images = images;
        this.rating = rating;
    }
}