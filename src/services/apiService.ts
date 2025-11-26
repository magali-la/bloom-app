// import the Product Data interface type, which stores the shape of the data expected
import type { ProductData } from "../models/Product.ts";
import { HTTPError, NetworkError } from "../utils/errorHandler.ts";

// FETCH FROM DUMMY JSON API

// Fetch beauty products
export const fetchBeautyProducts = async (): Promise<ProductData[]> => {
    try {
        // set a console.log statement at the beginning of this fetch
        console.log(`Attempting to retrieve beauty products`);
        const response = await fetch('https://dummyjson.com/products/category/beauty');

        // use fetch methods to identify HTTP error codes
        if (!response.ok) {
            throw new HTTPError(`Failed to fetch beauty products: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Beauty products retrieved successfully: `, data.products);

        // return the products key in the raw data, an array of product objects
        return data.products;

    } catch(error) {
        // throw a more specific error after being caught in the try block
        throw new NetworkError(`Failed to fetch beauty products: ${error}`);
    }
}