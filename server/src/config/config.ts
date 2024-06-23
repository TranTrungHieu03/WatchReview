import dotenv from "dotenv"
dotenv.config();

//server
const DEVELOPMENT = process.env.NODE_ENV === "development";
const TEST = process.env.NODE_ENV === "test";
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "http://localhost";
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 5001

const SERVER = {
    SERVER_PORT,
    SERVER_HOSTNAME
}

//mongo
const MONGO_DB_URI = process.env.MONGO_DB_URI;
const MONGO = {
    MONGO_DB_URI
}

const config = {
    mongo: MONGO,
    server: SERVER
}

export default config;