import type { Response } from "express"

export enum ErrorType {
    BAD_REQUEST = "BadRequest",          // 400
    NOT_FOUND = "NotFound",               // 404
    UNAUTHORIZED = "Unauthorized",        // 401
    FORBIDDEN = "Forbidden",              // 403
    INTERNAL = "Internal",                // 500
    TOKEN_EXPIRED = "TokenExpired",       // 401
    BAD_TOKEN = "BadToken",               // 401
    ACCESS_TOKEN_ERROR = "AccessTokenError", // 401
}

export class ApiError extends Error {
    type: ErrorType
    statusCode: number
    constructor(type: ErrorType, statusCode: number, message: string) {
        super(message)
        this.type = type
        this.statusCode = statusCode
        Object.setPrototypeOf(this, new.target.prototype)
        Error.captureStackTrace(this, this.constructor)
    }
 
     static handle(err:ApiError , res:Response){
        res.status(err.statusCode || 500).json({
            type:err.type || ErrorType.INTERNAL ,
            message:err.message || "Internal server error"

        })
     }

}
