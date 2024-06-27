import mongoose, {Schema} from "mongoose";
import {IMember} from "../interfaces/member.interface";
import {hashPassword} from "../utils/jwt";
const memberSchema = new Schema({
    membername: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    YOB: { type: Number, require: true },
    name: { type: String, require: true }
}, { timestamps: true, });

memberSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await hashPassword(this.password)
    next();
});
const Member = mongoose.model<IMember>("Member", memberSchema);
export default Member