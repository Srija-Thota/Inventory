import Order from '../models/ordermodel.js'; // Import the Order model
import Profit from './profitmodel.js';
// Function to calculate the total price of all orders
const calculateTotalPriceOfOrders = async () => {
    try {
        const date = new Date();
        let currentDay = String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth() + 1).padStart(2, '0');
        let currentYear = date.getFullYear();
        let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

        // Query profits for the present date
        const orders = await Order.find({ date: currentDate });
        
        // Calculate the total price by summing up the totalPrice of each order
        const totalPriceOfOrders = orders.reduce((total, order) => total + order.totalPrice, 0);

        return totalPriceOfOrders;
    } catch (error) {
        console.error('Error calculating total price of orders:', error);
        throw error;
    }
};

 // Import the Profit model

// Function to calculate total income from orders and generate random expenditure
const calculateIncomeAndExpenditure = async () => {
    try {
        // Calculate total income from orders
        const income = await calculateTotalPriceOfOrders();

        // Generate random expenditure
        const expense = Math.floor(Math.random() * 50000); // Generate a random number for expenditure

        // Save the income and expenditure to the Profit model
        const profit = new Profit({
            income,
            expense
             // Set the current date
        });

        await profit.save(); // Save the profit entry

        console.log('Income and expenditure saved successfully:', profit);
    } catch (error) {
        console.error('Error calculating income and expenditure:', error);
        throw error;
    }
};

export default calculateIncomeAndExpenditure;

