export interface RatingModel {
    average: number;
}

export interface ImageModel {
    medium: string;
    original: string;
}

export interface ShowModel {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: Array<string>;
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string;
    rating: RatingModel;
    weight: number;
    image: ImageModel;
    list?: Array<ShowModel>;
    person: any;
    summary: any;
    _embedded: any;
}
