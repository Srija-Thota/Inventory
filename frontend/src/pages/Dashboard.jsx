import  { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import DashboardCard from '../components/DashboardCard.jsx';
import Sidebar from '../components/Sidebar.jsx';

import './Home.css';


const Home = () => {
  const navigate = useNavigate()
  const [totalItems, setTotalItems] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [activePage, setActivePage] = useState('Dashboard'); // Track the active page
  axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3006/auth/verify')
        .then(res=> {
            if(res.data.status) {/*empty*/} else {
              navigate('/')
            }
            console.log(res)
        })
    }, [navigate])
  const handleClick = (pageName) => {
    setActivePage(pageName);
  };

  useEffect(() => {
    fetchsetTotalItems();
    fetchRevenue();
    fetchCustomers();
    fetchOrders();
   
  }, []);

  const fetchsetTotalItems = () =>{
    fetch(
      `http://localhost:3006/items`
    )
    .then((response) => response.json())
    .then((items)=>setTotalItems(items.count));
  };

  const fetchRevenue = () => {
    fetch(`http://localhost:3006/profit`)
       .then((response) => response.json())
       .then((data) => setTotalRevenue(data.totalPrice));
};
const fetchOrders = () => {
  fetch(`http://localhost:3006/ordersc`)
     .then((response) => response.json())
     .then((data) => setTotalOrders(data.count));
};
const fetchCustomers = () => {
  fetch(`http://localhost:3006/ordersc`)
     .then((response) => response.json())
     .then((data) => setTotalCustomers(data.count));
};
  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard':
        return (
          <div className="card-container">
            <DashboardCard title="Total Items" src="../src/images/items.png" value={totalItems} />
            <DashboardCard title="Total Revenue" src="../src/images/revenue.png" value={`$${totalRevenue}`} />
            <DashboardCard title="Total Customers" src="../src/images/people.png" value={totalCustomers} />
            <DashboardCard title="Total Orders" src="../src/images/orders.png" value={totalOrders} />
           
          
      <iframe
        style={{
          background: '#FFFFFF',
          border: 'none',
          borderRadius: '2px',
          boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
        }}
        width="640"
        height="480"
        src="https://charts.mongodb.com/charts-project-0-xkpgg/embed/charts?id=661380f9-f4e7-466a-867d-00e153a3f0f6&maxDataAge=3600&theme=light&autoRefresh=true"
        title="MongoDB Atlas Chart"
      ></iframe>
         <iframe 
         style={{background: '#FFFFFF',
         border: 'none',
         bordeRadius: '2px',
         boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)', 
        }}
        width="640"
        height="480" 
        src="https://charts.mongodb.com/charts-project-0-xkpgg/embed/charts?id=6607f5a4-dc56-4b85-8df9-1494931d829b&maxDataAge=3600&theme=light&autoRefresh=true"
        title="Revenue Charts">
       
        </iframe>
    
         </div>
        );
     
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Sidebar handleClick={handleClick} />
      {renderContent()}
    </div>
  );
}

export default Home;
