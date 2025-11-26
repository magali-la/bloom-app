// import the Product Data interface type, which stores the shape of the data expected
import type { ProductData } from "../models/Product.ts";

// FETCH FROM DUMMY JSON API

// Fetch beauty products
export const fetchBeautyProducts = async (): Promise<ProductData[]> => {
    try {
        const response = await fetch('https://dummyjson.com/products/category/beauty');

        // use fetch methods to identify HTTP error codes
        if (!response.ok) {
            throw new Error(`HTTP Error: Failed to fetch beauty products: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.products);

        // return the products key in the raw data, an array of product objects
        return data.products;

    } catch(error) {
        // throw a more specific error after being caught in the try block
        throw new Error(`Failed to fetch beauty products: ${error}`);
    }
}

fetchBeautyProducts();