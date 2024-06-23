import express, {Application, Request, Response} from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import connectToDatabase from "./config/database";
import config from "./config/config";
import logging from "./config/logging";
import {corsHandler} from "./middleware/corsHandler";
import {loggingHandler} from "./middleware/loggingHandler";
import {routeNotFound} from "./middleware/routeNotFound";
import router from "./routes";  
const app: Application = express();

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(loggingHandler)
app.use(corsHandler)

app.use("/", router)

app.use(routeNotFound)

const server = http.createServer(app);
connectToDatabase()
    .then(() => {
        server.listen(config.server.SERVER_PORT, () => {
            logging.info("SERVER", `Server is running on ${config.server.SERVER_HOSTNAME}:${config.server.SERVER_PORT}`);
        });
    }).catch((error: Error) => {
    logging.error("SERVER", "Database connection failed", error);
    process.exit();
});
 

 