import { Request, Response } from "express";
import { AddItemToOrderService } from "../../services/order/AddItemToOrderService";

class AddItemToOrderController {

    async handle(req: Request, res: Response) {

        const { order_id, product_id, amount } = req.body;
        const { user_token } = req.headers;

        const addItemToOrderService = new AddItemToOrderService();

        try {

            const addItem = await addItemToOrderService.execute(user_token, { order_id, product_id, amount});

            res.status(201).json(addItem);

        } catch (err: unknown) {

            if (err instanceof Error) {

                console.log(err);
                res.status(400).send(err);

            } else {

                console.log("Unknown error:", err);
                res.status(500).send("Unknown error");

            }
        }
    }
}

export { AddItemToOrderController }