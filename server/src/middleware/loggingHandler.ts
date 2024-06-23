import {NextFunction, Request, Response} from "express";
import log from "../config/logging";

export const loggingHandler =
    (req: Request, res: Response, next: NextFunction) => {
        log.info("SERVER", `METHOD: ${req.method} - URL: ${req.url} - IP: ${req.socket.remoteAddress}`);
        
        res.on("finish", () => {
            log.info("SERVER", `METHOD: ${req.method} - URL: ${req.url} - STATUS: ${res.statusCode} - IP: ${req.socket.remoteAddress}`)
        })

        next()
    }