import mongoose, {Schema} from "mongoose";
import commentSchema from "./comment.modal";
import {IWatch} from "../interfaces/watch.interface";

const watchSchema = new Schema({
    watchName: {type: String, require: true},
    image: {type: String, require: true},
    price: {type: Number, require: true},
    isAutomatic: {type: Boolean, default: false},
    watchDescription: {type: String, require: true},
    comments: [commentSchema],
    brand: {type: mongoose.Schema.Types.ObjectId, ref: "Brand", require: true},
}, {timestamps: true,});
const Watch = mongoose.model<IWatch>("Watch", watchSchema);
export default Watch