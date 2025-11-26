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
interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
}
export declare class Product {
    id: string;
    title: string;
    brand: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    reviews: Review[];
    images: string[];
    constructor(id: string, title: string, brand: string, category: string, price: number, discountPercentage: number, rating: number, reviews: Review[], images: string[]);
    displayDetails(): string;
    getFinalSalePrice(): number;
}
export {};
//# sourceMappingURL=Product.d.ts.map