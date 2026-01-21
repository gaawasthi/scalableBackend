import { ApiError } from "./apiError.js";
export declare class BadRequestError extends ApiError {
    constructor(message?: string);
}
export declare class NotFoundError extends ApiError {
    constructor(message?: string);
}
export declare class UnauthorizedError extends ApiError {
    constructor(message?: string);
}
export declare class ForbiddenError extends ApiError {
    constructor(message?: string);
}
export declare class InternalError extends ApiError {
    constructor(message?: string);
}
export declare class TokenExpiredError extends ApiError {
    constructor(message?: string);
}
export declare class BadTokenError extends ApiError {
    constructor(message?: string);
}
export declare class AccessTokenError extends ApiError {
    constructor(message?: string);
}
//# sourceMappingURL=customError.d.ts.map