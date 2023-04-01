import prismaClient from "../../prisma";
import { verifyUser } from "../user/VerifyUserService";

class ListOrderService {
    async execute({ user_token, order_id }) {

        const userId = verifyUser(user_token);

        const order = await prismaClient.item.findMany({
            where: {
                AND: {
                    order_id: order_id,
                    user_id: userId as string
                }
            }
        });

        return order;

    }
}

export { ListOrderService }