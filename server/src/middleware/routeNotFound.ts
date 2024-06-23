import logging from "../config/logging";
import {Request, Response, NextFunction} from "express";

export const routeNotFound = (req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Route Not Found');

    logging.error("ROUTE NOT FOUND", error.message);
    return res.status(404).json({error: error.message})
}