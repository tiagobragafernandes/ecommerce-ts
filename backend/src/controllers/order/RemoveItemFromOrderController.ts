import { Request, Response } from "express";
import { RemoveItemFromOrderService } from "../../services/order/RemoveItemFromOrderService";

class RemoveItemFromOrderController {

    async handle(req: Request, res: Response) {

        const { item_id } = req.body;

        const removeItemFromOrderService = new RemoveItemFromOrderService();

        try {
            
          const removeItem = await removeItemFromOrderService.execute({ item_id });

          res.status(204).json(removeItem);

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

export { RemoveItemFromOrderController }