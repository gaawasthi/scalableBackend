import mongoose, { Document, Model, Schema } from "mongoose";
export var Status;
(function (Status) {
    Status["NOT_STARTED"] = "not-started";
    Status["IN_PROGRESS"] = "in-progress";
    Status["DONE"] = "done";
})(Status || (Status = {}));
export const DOCUMENT_NAME = "Todo";
export const COLLECTION_NAME = "todos";
const todoModel = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: Status.NOT_STARTED,
        enum: Object.values(Status),
    },
}, {
    timestamps: true,
});
const Todo = mongoose.model(DOCUMENT_NAME, todoModel, COLLECTION_NAME);
export default Todo;
//# sourceMappingURL=todoModel.js.map