import  Menu  from '../models/menumodel.js'; // Import the Menu schema/model
import  Order  from '../models/ordermodel.js'; // Import the Order model

// Function to generate and save a random order
const generateAndSaveRandomOrder = async () => {
    try {
        const numItems = Math.floor(Math.random() * 5) + 1; // Random number of items per order
        const fitems = [];

        // Fetch all menu items from the database
        const allMenuItems = await Menu.find();

        // Generate random items for the order based on the menu items
        for (let i = 0; i < numItems; i++) {
            const randomIndex = Math.floor(Math.random() * allMenuItems.length);
            const menuItem = allMenuItems[randomIndex].name; // Get the ObjectId of the menu item
            const quantity = Math.floor(Math.random() * 10) + 1; // Random quantity
            fitems.push({ menuItem, quantity });
        }

        // Calculate total price based on the menu items
        const totalPrice = fitems.reduce((total, fitem) => {
            const menuItem = allMenuItems.find(menuItem => menuItem.name === fitem.menuItem );
            return total + menuItem.price * fitem.quantity;
        }, 0);

        // Create and save the order
        const order = new Order({
            fitems,
            totalPrice // Set the total price
        });
        await order.save();
        console.log('Random order saved successfully:', order);
    } catch (error) {
        console.error('Error generating and saving random order:', error);
    }
}
const generateMultipleOrders = async (minOrders, maxOrders) => {
    try {
        // Generate a random number of orders between minOrders and maxOrders (inclusive)
        const numOrders = Math.floor(Math.random() * (maxOrders - minOrders + 1)) + minOrders;

        for (let i = 0; i < numOrders; i++) {
            await generateAndSaveRandomOrder(); // Call generateAndSaveRandomOrder function for each order
        }
        console.log(`Generated ${numOrders} random orders successfully`);
    } catch (error) {
        console.error('Error generating multiple orders:', error);
    }
};

// Export 
export default generateMultipleOrders;
