import { Document, Model } from "mongoose";
import type { UserDoc } from "./userModel.js";
export interface Todo extends Document {
    user: UserDoc;
    title: string;
    description: string;
    status: string;
}
export declare enum Status {
    NOT_STARTED = "not-started",
    IN_PROGRESS = "in-progress",
    DONE = "done"
}
export declare const DOCUMENT_NAME = "Todo";
export declare const COLLECTION_NAME = "todos";
declare const Todo: Model<Todo>;
export default Todo;
//# sourceMappingURL=todoModel.d.ts.map