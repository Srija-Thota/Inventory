import express from 'express';
import Order from '../models/ordermodel.js';
const router = express.Router();
import generateMultipleOrders from '../models/func1.js';


router.post('/orders', async (req, res) => {
    try {
        // Call the function to generate and save a random order
        await generateMultipleOrders(1,4);

        // Send success response
        res.status(201).json({ success: true, message: 'Random order generated and saved successfully.' });
    } catch (error) {
        // Send error response
        console.error('Error creating order:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
})
router.get('/ordersc', async (req, res) => {
    try {
        const date = new Date();
        let currentDay = String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth() + 1).padStart(2, '0');
        let currentYear = date.getFullYear();
        let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

        // Query profits for the present date
        const orders = await Order.find({ date: currentDate });
        return res.status(200).json({
            count: orders.length,
           
        });
    } catch (error) {
        // Handle errors
        console.error('Error retrieving orders:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
});
router.get('/orders', async (req, res) => {
    try {
        const date = new Date();
        let currentDay = String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth() + 1).padStart(2, '0');
        let currentYear = date.getFullYear();
        let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

        // Query profits for the present date
        const orders = await Order.find({ date: currentDate });
        return res.status(200).json({
            data:orders
           
        });
    } catch (error) {
        // Handle errors
        console.error('Error retrieving orders:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
});
export default router; // Import the generateAndSaveRandomOrder function        

