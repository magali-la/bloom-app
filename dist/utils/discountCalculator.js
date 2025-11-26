import { Product } from "../models/Product.js";
export function calculateDiscount(product) {
    // convert product's discount percent to a decimal
    let discountDecimal = product.discountPercentage / 100;
    return product.price * discountDecimal;
}
//# sourceMappingURL=discountCalculator.js.map