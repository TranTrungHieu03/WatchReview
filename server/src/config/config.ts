import dotenv from "dotenv"
import * as process from "node:process";

dotenv.config();

//server
const DEVELOPMENT = process.env.NODE_ENV === "development";
const TEST = process.env.NODE_ENV === "test";
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "http://localhost";
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 5001
const SECRET_KEY_ACCESS_TOKEN = process.env.SECRET_KEY_ACCESS_TOKEN

const SERVER = {
    SERVER_PORT,
    SERVER_HOSTNAME,
    SECRET_KEY_ACCESS_TOKEN
}

//mongo
const MONGO_DB_URI = process.env.MONGO_DB_URI || "mongodb://localhost:27017";
const MONGO = {
    MONGO_DB_URI
}

const config = {
    mongo: MONGO,
    server: SERVER
} as const

export default config;