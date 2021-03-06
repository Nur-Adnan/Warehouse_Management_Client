import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import './App.css';
import AddItem from './pages/AddItem/AddItem';
import Blogs from './pages/Blogs/Blogs';
import CarInventory from './pages/CarInventory/CarInventory';
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from "./pages/Login/Register/Register";
import ManageItems from './pages/ManageItems/ManageItems';
import MyItems from './pages/MyItems/MyItems';
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Update from './pages/Update/Update';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/service/:carId' element={
          <PrivateRoute>
            <CarInventory></CarInventory>
          </PrivateRoute>
        }></Route>
        <Route path='/add-item' element={
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        }></Route>
        <Route path='/manage-items' element={
          <PrivateRoute>
            <ManageItems></ManageItems>
          </PrivateRoute>
        }></Route>
        <Route path='/myItems' element={
          <PrivateRoute>
            <MyItems></MyItems>
          </PrivateRoute>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/all-items' element={<Update></Update>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
