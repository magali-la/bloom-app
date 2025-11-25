// define interface for the review data
interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
} 

export class Product {
    id: string;
    title: string;
    brand: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    reviews: Review[];
    images: string[];

    constructor(id: string, title: string, brand: string, category: string, price: number, discountPercentage: number, rating: number, reviews: Review[], images: string[]) {
        this.id = id;
        this.title = title;
        this.brand = brand; 
        this.category = category;
        this.price = price, 
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.reviews = reviews;
        this.images = images;
    }

}