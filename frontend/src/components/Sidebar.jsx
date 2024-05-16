// Sidebar.js

import { Link } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is imported
import './Sidebar.css'; // Import the CSS for sidebar styling
import { TfiStatsUp } from "react-icons/tfi";
import { MdFastfood } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { TbHomeDollar } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi"; // Import logout icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function Sidebar({ handleClick }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:3006/auth/logout')
      .then(res => {
        if (res.data.status) {
          navigate('/');
        }
      }).catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="sidebar">
      <img src="../src/images/logo1.jpg" alt="Logo" />
      <ul>
        <li>
          <Link to="/dashboard" onClick={() => handleClick('Dashboard')}>
            <TbHomeDollar className="sidebar-icon" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/Items" onClick={() => handleClick('Items')}>
            <BsCartCheckFill className="sidebar-icon" />
            Items
          </Link>
        </li>
        <li>
          <Link to="/Menu" onClick={() => handleClick('Menu')}>
            <MdFastfood className="sidebar-icon" />
            Menu
          </Link>
        </li>
        <li>
          <Link to="/Analytics" onClick={() => handleClick('Analytics')}>
            <TfiStatsUp className="sidebar-icon" />
            Analytics
          </Link>
        </li>
      </ul>
      {/* Logout link */}
      <div className="logout" onClick={handleLogout}>
        <FiLogOut className="sidebar-icon" />
        Logout
      </div>
    </div>
  );
}

export default Sidebar;
