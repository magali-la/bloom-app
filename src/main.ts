import { Product, type ProductData } from "./models/Product.ts";
import { fetchBeautyProducts } from "./services/apiService.ts";
import { NetworkError } from "./utils/errorHandler.ts";

// async function to fetch beauty products, then console log each product's details and final sales price - set promise to void, as there isn't anything being returned, just logged.
async function displayProductDetails(): Promise<void> {
    try {
        // unwrap the data from the api call's promise by awaiting it - await ensures that the next lines of code aren't run until the promise is settled in the apiService function
        const beautyProductsData: ProductData[] = await fetchBeautyProducts();
        console.log(`Beauty products successfully unwrapped in main.ts`);

        
        // take the unwrapped array of product objects and create a new instance to call the methods
        beautyProductsData.forEach(product => {
            // make each element in the data array a new instance of class
            const beautyProduct = new Product(product.id, product.title, product.brand, product.category, product.price, product.discountPercentage, product.rating, product.reviews, product.images);

            // log the product being read
            console.log(`Current beauty product being processed`, beautyProduct);

            // now store the detail and final price in a string
            let productDetails = `${beautyProduct.displayDetails()} The final price with discount and tax applied is $${beautyProduct.getFinalSalePrice()}`;

            // log the details of that product
            console.log(`Important information about this beauty product: `, productDetails);
        });

    } catch (error) {
        throw new NetworkError(`Error found: ${error}`);

    } finally {
        console.log(`All API calls attempted.`);
    }
}

displayProductDetails();