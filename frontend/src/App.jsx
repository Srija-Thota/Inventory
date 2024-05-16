
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Dashboard';
import MenuCard from './pages/menucard';
import Analysis from './pages/analysis';
import CreateItem from './pages/CreateItems';
import DeleteItem from './pages/DeleteItem';
import ShowItem from "./pages/ShowItem";
import Sidebar from "./components/Sidebar";
import EditItem from './pages/EditItem';
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Home1 from "./pages/Home1";


const App = () => {
  const location = useLocation();
 
  const showSidebar = !['/login', '/signup','/','/dashboard1'].includes(location.pathname);

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <main>
        <Routes>
          <Route path='/' element={<Home1 />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          
          
          <Route path='/dashboard' element={<Home />} />

          <Route path='/items' element={<ShowItem />} />
          <Route path='/items/create' element={<CreateItem />} />
          <Route path='/menu' element={<MenuCard />} />
          <Route path='/analytics' element={<Analysis />} />
          <Route path='/items/edit/:id' element={<EditItem />} />
          <Route path='/items/delete/:id' element={<DeleteItem />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
