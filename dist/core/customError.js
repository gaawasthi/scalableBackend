import { ApiError, ErrorType } from "./apiError.js";
export class BadRequestError extends ApiError {
    constructor(message = "Bad Request") {
        super(ErrorType.BAD_REQUEST, 400, message);
    }
}
export class NotFoundError extends ApiError {
    constructor(message = "Not Found") {
        super(ErrorType.NOT_FOUND, 404, message);
    }
}
export class UnauthorizedError extends ApiError {
    constructor(message = "Unauthorized") {
        super(ErrorType.UNAUTHORIZED, 401, message);
    }
}
export class ForbiddenError extends ApiError {
    constructor(message = "Forbidden") {
        super(ErrorType.FORBIDDEN, 403, message);
    }
}
export class InternalError extends ApiError {
    constructor(message = "Internal Server Error") {
        super(ErrorType.INTERNAL, 500, message);
    }
}
export class TokenExpiredError extends ApiError {
    constructor(message = "Token Expired") {
        super(ErrorType.TOKEN_EXPIRED, 401, message);
    }
}
export class BadTokenError extends ApiError {
    constructor(message = "Bad Token") {
        super(ErrorType.BAD_TOKEN, 401, message);
    }
}
export class AccessTokenError extends ApiError {
    constructor(message = "Access Token Error") {
        super(ErrorType.ACCESS_TOKEN_ERROR, 401, message);
    }
}
//# sourceMappingURL=customError.js.map