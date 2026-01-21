import mongoose from "mongoose";
import { db, environment } from "../config.js";
import logger from "../core/Logger.js";
const dbURI = `mongodb://127.0.0.1:27017
/scaled`;
const options = {
    autoIndex: true,
    minPoolSize: db.minPoolSize,
    maxPoolSize: db.maxPoolSize,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
};
// 
logger.debug(dbURI);
function setRunValidators() {
    return { runValidators: true };
}
mongoose.set("strictQuery", true);
// Create the database connection
if (environment !== "test") {
    mongoose
        .plugin((schema) => {
        schema.pre("findOneAndUpdate", setRunValidators);
        schema.pre("updateMany", setRunValidators);
        schema.pre("updateOne", setRunValidators);
        schema.pre("update", setRunValidators);
    })
        .connect(dbURI, options)
        .then(() => {
        logger.info("Mongoose connection done");
    })
        .catch(e => {
        logger.info("Mongoose connection error");
        logger.error(e);
    });
}
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", () => {
    logger.debug("Mongoose default connection open to " + dbURI);
});
// If the connection throws an error
mongoose.connection.on("error", err => {
    logger.error("Mongoose default connection error: " + err);
});
// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
    logger.info("Mongoose default connection disconnected");
});
// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
    mongoose.connection.close().finally(() => {
        logger.info("Mongoose default connection disconnected through app termination");
        process.exit(0);
    });
});
export const connection = mongoose.connection;
//# sourceMappingURL=index.js.map