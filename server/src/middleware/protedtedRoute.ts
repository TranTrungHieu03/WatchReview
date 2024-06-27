import {NextFunction, Request, Response} from "express";
import {verifyToken} from "../utils/jwt";

export const protectedRoute =
    async (req: Request, res: Response, next: NextFunction) => {
        let token: string | undefined;
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            token = req.headers.authorization.split(' ')[1]
        }

        if (!token) {
            return res.status(401).json({error: 'Not authorized, no token'});
        }
        try {
            const result = await verifyToken(token)
            if (result.valid) {
                const {membername, isAdmin} = result.decoded!;
                req.body.auth = {membername, isAdmin}
                next();
            } else if (result.expired) {
                return res.status(401).json({error: 'Token expired'});
            } else {
                return res.status(401).json({error: 'Invalid token'});
            }
        } catch (error) {
            res.status(401).json({error: 'Not authorized, token failed'});
        }
    }