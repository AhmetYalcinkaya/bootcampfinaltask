import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./pages/productList/ProductList";
import Detail from "./pages/productDetail/Detail";
import Orders from "./pages/orderPage/Orders";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import CostumerOrders from "./pages/customerorders/CostumerOrders";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/productlist/:id" element={<ProductList />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myorders" element={<CostumerOrders />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
