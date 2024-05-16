import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  items:[{
    type:String,
    required:true
}],
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String, // URL to the image
    required: true
  },
  
});

export const Menu = mongoose.model("Menu", MenuSchema);
export default Menu;

