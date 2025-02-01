export class Product {
    id?: number | null;
    name: string;
    description: string;
    price: number;
    quantityInStock: number

    constructor(productInfo: {
        id?: number | null, name: string, description: string, price: number, quantityInStock: number
    }) {
        this.id = productInfo.id;
        this.name = productInfo.name;
        this.description = productInfo.description;
        this.price = productInfo.price;
        this.quantityInStock = productInfo.quantityInStock;

    }
}