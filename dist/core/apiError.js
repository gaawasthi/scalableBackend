export var ErrorType;
(function (ErrorType) {
    ErrorType["BAD_REQUEST"] = "BadRequest";
    ErrorType["NOT_FOUND"] = "NotFound";
    ErrorType["UNAUTHORIZED"] = "Unauthorized";
    ErrorType["FORBIDDEN"] = "Forbidden";
    ErrorType["INTERNAL"] = "Internal";
    ErrorType["TOKEN_EXPIRED"] = "TokenExpired";
    ErrorType["BAD_TOKEN"] = "BadToken";
    ErrorType["ACCESS_TOKEN_ERROR"] = "AccessTokenError";
})(ErrorType || (ErrorType = {}));
export class ApiError extends Error {
    type;
    statusCode;
    constructor(type, statusCode, message) {
        super(message);
        this.type = type;
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this, this.constructor);
    }
    static handle(err, res) {
        res.status(err.statusCode || 500).json({
            type: err.type || ErrorType.INTERNAL,
            message: err.message || "Internal server error"
        });
    }
}
//# sourceMappingURL=apiError.js.map