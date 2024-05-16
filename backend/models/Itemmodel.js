import mongoose from "mongoose";


const ItemSchema = new mongoose.Schema({
  
    name: String,
    quantity: Number,
    category: String,
    value: Number,
    price: Number
});


export const Item = mongoose.model("Item", ItemSchema);

