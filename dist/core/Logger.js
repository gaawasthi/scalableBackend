import path from 'path';
import fs from 'fs';
import { createLogger, transports, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { environment } from '../config.js';
/* -------------------- LOG DIRECTORY -------------------- */
const logDir = path.resolve('logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}
/* -------------------- LOG LEVEL -------------------- */
const logLevel = environment === 'development' ? 'debug' : 'info';
/* -------------------- FILE ROTATION -------------------- */
const dailyRotateFileTransport = new DailyRotateFile({
    level: logLevel,
    dirname: logDir,
    filename: '%DATE%-result.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
});
/* -------------------- LOGGER -------------------- */
const logger = createLogger({
    level: logLevel,
    format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), format.errors({ stack: true }), format.json()),
    transports: [
        new transports.Console({
            level: logLevel,
            format: format.combine(format.colorize(), format.simple()),
        }),
        dailyRotateFileTransport,
    ],
    exceptionHandlers: [dailyRotateFileTransport],
    exitOnError: false
});
export default logger;
//# sourceMappingURL=Logger.js.map