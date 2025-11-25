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

    // display method
    displayDetails(): string {
        return `The product '${this.title}' is a ${this.category} product from the brand '${this.brand}'. Its pre-tax price is $${this.price}. It has a rating of ${this.rating}. View some reviews here: ${this.reviews}'`
    }

    // get price with discount method
    getPriceWithDiscount(): number {
        return this.price - (this.price * (this.discountPercentage / 100));
    }
}