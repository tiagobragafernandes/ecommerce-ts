import prismaClient from "../../prisma";
import { verifyUser } from "../user/VerifyUserService";

interface ItemRequest {
    order_id: string,
    product_id: string,
    amount: number
}

class AddItemToOrderService {
    async execute(user_token, { order_id, product_id, amount }: ItemRequest) {

        const userId = verifyUser(user_token);

        const order = await prismaClient.item.create({

            data: {
                order_id: order_id,
                product_id: product_id,
                product_qty: amount,
                user_id: userId as string
            }
        });

        return order;

    }
}

export { AddItemToOrderService }