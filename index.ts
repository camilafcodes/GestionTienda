import { Product } from "./src/domain/models/Product";
import { ProductRepository } from "./src/infrastructure/repositories/product_repository";

const productRepository = new ProductRepository();

const product = new Product({
    name: "Laptop",
    description: "Intel Core i5, 16GB RAM, 512GB SSD",
    price: 1200,
    quantityInStock: 10,
});

const main = async () => {
    const result = await productRepository.CreateProduct(product);
    console.log(result);
}
main()