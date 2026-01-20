import { Document, Model } from "mongoose";
export interface UserDoc extends Document {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    matchPassword(enteredPassword: string): Promise<boolean>;
}
export interface UserModel extends Model<UserDoc> {
    matchPassword(enteredPassword: string): Promise<boolean>;
}
export declare const DOCUMENT_NAME = "User";
export declare const COLLECTION_NAME = "users";
declare const User: Model<UserDoc>;
export default User;
//# sourceMappingURL=userModel.d.ts.map