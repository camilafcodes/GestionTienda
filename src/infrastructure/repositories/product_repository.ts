import { Product } from "../../domain/models/Product";
import { getPoolConnection } from "./data-source";

export class ProductRepository {

    async CreateProduct(product: Product) {
        const connection = getPoolConnection();
        const querySql = `INSERT INTO Productos (nombre, descripcion, precio, cantidad_disponible) VALUES (?,?,?,?)`
        const values = [product.name, product.description, product.price, product.quantityInStock]

        const result = await connection.query(querySql, values)
        return result;



    }
}