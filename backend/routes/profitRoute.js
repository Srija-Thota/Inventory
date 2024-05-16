import express from 'express';
import Profit from '../models/profitmodel.js';
import Order from '../models/ordermodel.js';
const router = express.Router();
import calculateIncomeAndExpenditure from '../models/func2.js';


router.post('/profits', async (req, res) => {
    try {
        // Call the function to generate and save a random order
        await calculateIncomeAndExpenditure();

        // Send success response
        res.status(201).json({ success: true, message: 'Random expense generated and saved successfully.' });
    } catch (error) {
        // Send error response
        console.error('Error creating order:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
})
router.get('/profits',async(req,res)=>{
    try{
       const profits = await Profit.find({});
       return res.status(200).json({
           
           data:profits
       });
    }catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

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
        let totalPriceOfOrders = orders.reduce((total, order) => total + order.totalPrice, 0);

        // Round the total price to two decimal places
        totalPriceOfOrders = parseFloat(totalPriceOfOrders.toFixed(2));

        return totalPriceOfOrders;
    } catch (error) {
        console.error('Error calculating total price of orders:', error);
        throw error;
    }
};


router.get('/profit', async (req, res) => {
    try {
        // Call the calculateTotalPriceOfOrders function to get the total price of orders
        const totalPrice = await calculateTotalPriceOfOrders();

        return res.status(200).json({ totalPrice });
    } catch (error) {
        console.error('Error getting total price of orders:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});


export default router;