import {NextFunction, Request, Response} from "express";

export const isHasAdminRight = async (req: Request, res: Response, next: NextFunction) => {
    const owner = req.body.auth;
    if (!owner) {
        res.status(401).json({error: "Not authorized"});
    }
    if (!owner.isAdmin) {
        res.status(403).json({error: "Access denied. Admin rights required"})
    }
    next()
}

export const isOwner = async (req: Request, res: Response, next: NextFunction) => {
    const owner = req.body.auth;
    if (!owner) {
        res.status(401).json({error: "Not authorized"});
    }
    const {membername} = req.body;
    if (membername !== owner.membername) {
        res.status(403).json({error: "Access denied. Owner rights required"})
    }
    next();
}