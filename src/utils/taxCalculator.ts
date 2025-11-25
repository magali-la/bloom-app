import { Product } from "../models/Product.ts";

export function calculateTax(product: Product): number {
    let productTax: number;
    // conditional for tax rate for regular items vs
    if (product.category === "groceries"){
        productTax = 3;
    } else {
        productTax = 4.75;
    }

    // convert to decimal for calculations
    let taxdecimal = productTax / 100;

    return product.price * taxdecimal;
}