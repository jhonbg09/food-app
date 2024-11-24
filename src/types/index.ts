import { OrderProducts, Product } from "@prisma/client";

export type OrderItem = Pick<Product, "id" | "name" | "price"> & {
    quantity: number
    subtotal: number
}

export type OrderWithProduts = Order & {
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}