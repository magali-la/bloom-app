import { Product } from "../models/Product.js";
export function calculateTax(product) {
    let productTax;
    // conditional for tax rate for regular items vs
    if (product.category === "groceries") {
        productTax = 3;
    }
    else {
        productTax = 4.75;
    }
    // convert to decimal for calculations
    let taxdecimal = productTax / 100;
    return product.price * taxdecimal;
}
//# sourceMappingURL=taxCalculator.js.map