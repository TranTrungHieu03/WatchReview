import mongoose, {Schema} from "mongoose";
import {IBrand} from "../interfaces/brand.interface";

const brandSchema = new Schema({ brandName: String},{ timestamps: true, });

const Brand = mongoose.model<IBrand>("Brand", brandSchema);

export default Brand;