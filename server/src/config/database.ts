import mongoose from "mongoose";
import config from "./config";
import logging from "./logging"; 

const connectToDatabase = async (): Promise<void> => {
    await mongoose
        .connect(config.mongo.MONGO_DB_URI as string)
        .then(() => {
            logging.info("SERVER", "Mongo Connected");
        })
        .catch((error) => {
            logging.error("SERVER", error.message, error);
            process.exit();
            }
        )
}

export default connectToDatabase;