import { port } from "./config.js";
import logger from "./core/Logger.js";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();
app
    .listen(port, () => {
    logger.info(`server running on port : ${port}`);
})
    .on("error", e => logger.error(e));
//# sourceMappingURL=server.js.map