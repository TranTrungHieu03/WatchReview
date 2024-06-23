import mongoose, {Schema} from "mongoose";
import {IMember} from "../interfaces/member.interface";
const memberSchema = new Schema({
    membername: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    YOB: { type: Number, require: true },
    name: { type: String, require: true }
}, { timestamps: true, });

memberSchema.pre('save', async function (next) {
    // if (!this.isModified('password')) return next();
    // const salt = await bcrypt.genSalt(10);
    // this.password = await bcrypt.hash(this.password, salt);
    next();
});
const Member = mongoose.model<IMember>("Member", memberSchema);
export default Member