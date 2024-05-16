import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../pages/menu';
import Categories from '../pages/Categories';

const MenuCard = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState(['all']); // Initialize categories with 'all'

  useEffect(() => {
    // Fetch menu items from the API
    axios
      .get('http://localhost:3006/menu')
      .then((res) => {
        // Assuming API response data is an array of menu items
        setMenuItems(res.data.data); // Set menu items state with the fetched data
        // Extract categories from the fetched data and remove duplicates
        const uniqueCategories = ['all', ...new Set(res.data.map(item => item.category))];
        setCategories(uniqueCategories); // Set categories state with unique categories
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Run the effect only once after component mount

  const filterItems = (category) => {
    if (category === 'all') {
      // If 'all' category is selected, show all menu items
      setMenuItems(menuItems); // Set menu items state with all menu items
    } else {
      // Filter menu items based on the selected category
      const newItems = menuItems.filter((item) => item.category === category);
      setMenuItems(newItems); // Set menu items state with filtered items
    }
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default MenuCard;
