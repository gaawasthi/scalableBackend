import type { Response } from "express";
export declare enum ErrorType {
    BAD_REQUEST = "BadRequest",// 400
    NOT_FOUND = "NotFound",// 404
    UNAUTHORIZED = "Unauthorized",// 401
    FORBIDDEN = "Forbidden",// 403
    INTERNAL = "Internal",// 500
    TOKEN_EXPIRED = "TokenExpired",// 401
    BAD_TOKEN = "BadToken",// 401
    ACCESS_TOKEN_ERROR = "AccessTokenError"
}
export declare class ApiError extends Error {
    type: ErrorType;
    statusCode: number;
    constructor(type: ErrorType, statusCode: number, message: string);
    static handle(err: ApiError, res: Response): void;
}
//# sourceMappingURL=apiError.d.ts.map