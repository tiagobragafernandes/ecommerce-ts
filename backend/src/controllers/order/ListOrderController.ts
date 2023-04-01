import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

class ListOrderController {
    async handle(req: Request, res: Response) {

        const { user_token, order_id } = req.headers;

        const listOrderService = new ListOrderService();

        try {

            const orders = await listOrderService.execute({ user_token, order_id });

            return res.json(orders);

        } catch (error) {

            console.log(error);

            res.status(400).send(error);

        }
    }
}

export { ListOrderController }