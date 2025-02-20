import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import components
import Navbar from "./components/Navbar/Navbar";
// Pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Page404 from "./pages/Page404";
// Styles
import "./assets/styles/_reset.scss";
import "./assets/styles/_variables.scss";
import "./assets/styles/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productID" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
