import mongoose from 'mongoose';

// Define the schema for profit
const profitSchema = new mongoose.Schema({
    expense: {
        type: Number,
        default: 0
    },
    income: {
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

// Create a model for profit
const Profit = mongoose.model('Profit', profitSchema);

export default Profit;
