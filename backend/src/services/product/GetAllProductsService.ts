import prismaClient from "../../prisma";

class GetAllProductsService {

    async execute() {

        const productsList = await prismaClient.product.findMany({
            where: {
                qty_stock: {
                    gt: 0
                }
            }
        });

        return productsList

    }

}

export { GetAllProductsService }