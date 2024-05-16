import mongoose from "mongoose";
 // Import the Menu schema/model

// Define the schema for orders
const orderSchema = new mongoose.Schema({
    fitems: [{
        menuItem: {
            type: String, 
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    date: {
        type: String, // Change the type to String to store the date as a string
        default: function() { // Set default value using currentDate string
            const date = new Date();
            let currentDay = String(date.getDate()).padStart(2, '0');
            let currentMonth = String(date.getMonth() + 1).padStart(2, '0');
            let currentYear = date.getFullYear();
            return `${currentDay}-${currentMonth}-${currentYear}`;
        }
    }
});


const Order = mongoose.model('Order', orderSchema);

export default  Order ;

