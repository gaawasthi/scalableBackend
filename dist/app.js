import express, {} from "express";
import cors from "cors";
import "./database/index.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import { corsUrl, environment } from "./config.js";
import todoRoutes from "./routes/todoRoutes.js";
import { ApiError, ErrorType } from "./core/apiError.js";
import logger from "./core/Logger.js";
import { InternalError } from "./core/customError.js";
const app = express();
app.use(cors({ origin: corsUrl }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/todo", todoRoutes);
app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        ApiError.handle(err, res);
        if (err.type === ErrorType.INTERNAL) {
            logger.error(`500 - ${err.message} - ${req.originalUrl} -${req.method} -${req.ip}`);
        }
        else
            logger.error(`500 - ${err.message} - ${req.originalUrl} -${req.method} -${req.ip}`);
        logger.error(err.stack);
        if (environment === "development") {
            res.status(500).send({
                message: err.message, stack: err.stack
            });
        }
        ApiError.handle(new InternalError(), res);
    }
});
export default app;
//# sourceMappingURL=app.js.map