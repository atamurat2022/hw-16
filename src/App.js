import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Details from "./pages/Details";
import Home from "./pages/Home";
import MyCards from "./pages/MyCards";
import MyOrders from "./pages/MyOrders";
import Products from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/cards" element={<MyCards />} />
        <Route path="/orders" element={<MyOrders />} />
      </Routes>
    </div>
  );
}

export default App;
