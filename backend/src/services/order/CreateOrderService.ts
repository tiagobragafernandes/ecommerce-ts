import prismaClient from "../../prisma";
import { verifyUser } from "../user/VerifyUserService";

interface OrderRequest {
    delivery_date: string
}

class CreateOrderService {

    async execute( user_token, { delivery_date }: OrderRequest) {

        console.log(user_token)

        const userId = verifyUser(user_token);

        const verifyOpenedOrder = await prismaClient.order.findFirst({
            where: {
                AND: {
                    user_id: userId as string,
                    status: "pending"
                }
            }
        });

        if(verifyOpenedOrder){
            throw new Error("Você não pode fazer um novo carrinho sem finalizar o anterior.");
        }

        const order = await prismaClient.order.create({

            data: {
                user_id: userId as string,
                date: delivery_date,
                total_amount: 0.0,
                status: "pending"
            }

        });

        return order;

    }
}

export { CreateOrderService }