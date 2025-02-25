import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from "./Components/Footer/Footer.jsx";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import './App.css';

const Login = React.lazy(() => import("./Pages/Login.jsx"));
const Signup = React.lazy(() => import("./Pages/Signup.jsx"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs.jsx"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs.jsx"));
const ShopCategory = React.lazy(() => import("./Pages/ShopCategory.jsx"));
const Cart = React.lazy(() => import("./Pages/Cart.jsx"));
const Product = React.lazy(() => import("./Pages/Product.jsx"));
const Shop = React.lazy(() => import ("./Pages/Shop.jsx"));

// const PrivateRoute = ({ element }) => {
//   const isAuthenticated = localStorage.getItem("userToken");
//   return isAuthenticated ? element : <Login />;
// };

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          
          <Route path="/" element={<Shop />} />
          
          <Route path="/clothing" element={<ShopCategory category="clothing" />} />
          <Route path="/accessories" element={<ShopCategory category="accessories" />} />
          <Route path="/food" element={<ShopCategory category="food" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path='/food' element={<ShopCategory category="food"/>}/>
          <Route path='/clothes' element={<ShopCategory category="clothes"/>}/>
          <Route path='/accessories' element={<ShopCategory category="accessories"/>}/>
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
