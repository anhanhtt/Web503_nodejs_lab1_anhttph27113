import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    price: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
 
export default mongoose.model("product", productSchema)