import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navigation/Navbar.tsx";
import OrderNavbar from "./components/navigation/OrderNavbar.tsx";
import Footer from "./components/navigation/Footer.tsx";
import Home from "./pages/Home.tsx";
import Order from "./pages/Order.tsx";
import Cart from "./pages/Cart.tsx";

export const navDirectory = [
  { label: "Home", url: "#hero" },
  { label: "About", url: "#about" },
  { label: "Locations", url: "#locations" },
  { label: "Menu", url: "#menu" },
  { label: "Order", url: "/order" },
];

function DecideNavbar() {
  const { pathname } = useLocation();
  return pathname === "/order" || pathname === "/cart"
    ? <OrderNavbar />
    : <Navbar navDirectory={navDirectory} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <DecideNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
