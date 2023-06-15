import React,{Component} from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Header from './component/Header';
import HomePage from './component/HomePage';
import Login from './component/customer/LoginPage';
import LogOut from "./component/customer/LogOut";
import AboutUs from "./component/Owner/AboutUs";
import RegisterCust from './component/customer/RegisterCust';
import ProductListforCust from './component/customer/ProductListforCust';
import Profile from "./component/customer/Profile";
import UpdateCustomer from "./component/customer/UpdateCustomer";
import MyCart from "./component/customer/MyCart";
import OrderListforCust from "./component/customer/OrderListforCust";
import OrderDetailsForCust from "./component/customer/OrderDetailsForCust";
import OrderList from "./component/Owner/OrderList";
import OrderDetails from "./component/Owner/OrderDetails";
import ProductList from './component/product/ProductList';
import CustomerList from "./component/Owner/CustomerList";
import AddProduct from './component/product/AddProduct';
import CompletedOrderList from "./component/Owner/CompletedOrderList";
import ProfileOwner from "./component/Owner/Profile";


function App() {
  return (
    
    <div className="App">
       <Header/>
     <Router>
          <Routes>
             <Route path="/" element={<HomePage/>} />
             <Route path="/login" element={<Login/>} />
             <Route path="/logout" element={<LogOut/>} />
             <Route path="/aboutus" element={<AboutUs/>} />
             <Route path="/register" element={<RegisterCust/>} />
             <Route path="/productListforCust" element={<ProductListforCust/>}/>
             <Route path="/profile" element={<Profile/>} />
             <Route path="/updateProfile" element={<UpdateCustomer/>} />
             <Route path="/cart" element={<MyCart/>} />
             <Route path="/orderListForCust" element={<OrderListforCust/>} />
             <Route path="/orderDetailsForCust" element={<OrderDetailsForCust/>} />
             <Route path="/todaysOrder" element={<OrderList/>} />
             <Route path="/orderDetails" element={<OrderDetails/>} />
             <Route path="/product" element={<ProductList/>} />
             <Route path="/customerList" element={<CustomerList/>} />
             <Route path="/productlist" element={<ProductList/>}/>
             <Route path="/addProduct" element={<AddProduct/>}/>
             <Route path="/profileOwner" element={<ProfileOwner/>}/>
             <Route path="/completedOrder" element={<CompletedOrderList/>}/>

              
        </Routes>
     </Router>
    </div>
  );
}

export default App;
