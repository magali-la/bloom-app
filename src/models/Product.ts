import { calculateDiscount } from "../utils/discountCalculator.ts";
import { calculateTax } from "../utils/taxCalculator.ts";

// create an interface for the structure of the product
export interface ProductData {
    id: string;
    title: string;
    brand: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    reviews: Review[];
    images: string[];
}

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

    // get price with discount and tax
    getFinalSalePrice(): number {
        // store imported calculation utilities as variables, Product as argument
        const discountAmount = calculateDiscount(this);
        const taxAmount = calculateTax(this);

        // return it with 2 decimal places, convert string to number
        return Number((this.price - discountAmount + taxAmount).toFixed(2));
    }
}