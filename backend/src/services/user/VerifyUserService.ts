import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export function verifyUser(user_token: any) {

    try {
        //validar o token
        const { sub } = verify(
            user_token,
            process.env.JWT_SECRET
        ) as Payload;

        return sub

    } catch (err) {
        return false
    }

}