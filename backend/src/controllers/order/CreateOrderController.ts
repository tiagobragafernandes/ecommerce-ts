import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController {
    async handle(req: Request, res: Response) {

        const { delivery_date } = req.body;
        const { user_token } = req.headers;

        const createOrderService = new CreateOrderService();

        try {

            const newOrder = await createOrderService.execute(user_token, {
                delivery_date
            });

            return res.status(201).json(newOrder);

        } catch (error) {

            console.log(error);

            res.status(400).send(error);

        }
    }
}

export { CreateOrderController }