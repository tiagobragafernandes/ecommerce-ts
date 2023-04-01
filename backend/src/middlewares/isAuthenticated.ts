import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){

    //receber o token
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ")

    try{
        //validar o token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload;

        req.user_id = sub;

        return next()

    }catch(err){
        return res.status(401).end();
    }

}