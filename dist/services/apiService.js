import { HTTPError, NetworkError } from "../utils/errorHandler.js";
// FETCH FROM DUMMY JSON API
// Fetch beauty products
export const fetchBeautyProducts = async () => {
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
    }
    catch (error) {
        // throw a more specific error after being caught in the try block
        throw new NetworkError(`Failed to fetch beauty products: ${error}`);
    }
};
//# sourceMappingURL=apiService.js.map