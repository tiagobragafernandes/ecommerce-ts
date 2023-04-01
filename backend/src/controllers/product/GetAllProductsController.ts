import { Request, Response } from "express";
import { GetAllProductsService } from "../../services/product/GetAllProductsService";

class GetAllProductsController {

    async handle(req: Request, res: Response) {

        const getAllProductsService = new GetAllProductsService();

        try {
            
          const productsList =  await getAllProductsService.execute();

          res.json(productsList);

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

export { GetAllProductsController }