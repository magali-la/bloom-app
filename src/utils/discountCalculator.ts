import { Product } from "../models/Product.ts";

export function calculateDiscount(product: Product): number {
    // convert product's discount percent to a decimal
    let discountDecimal = product.discountPercentage / 100;
    
    return product.price * discountDecimal;
}