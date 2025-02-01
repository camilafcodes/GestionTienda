export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantityInStock: boolean

    constructor(productInfo: {
        id: number, name: string, description: string, price: number, quantityInStock: boolean
    }) {
        this.id = productInfo.id;
        this.name = productInfo.name;
        this.description = productInfo.description;
        this.price = productInfo.price;
        this.quantityInStock = productInfo.quantityInStock;

    }
}