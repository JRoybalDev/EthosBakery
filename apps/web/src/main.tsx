import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./index.css";
import Navbar from "./components/navigation/Navbar.tsx";
import OrderNavbar from "./components/navigation/OrderNavbar.tsx";
import Footer from "./components/navigation/Footer.tsx";
import Home from "./pages/Home.tsx";
import Order from "./pages/Order.tsx";
import Cart from "./pages/Cart.tsx";
import Checkout from "./pages/Checkout.tsx";
import Payment from "./pages/Payment.tsx";
import Confirmation from "./pages/Confirmation.tsx";

import ScrollToTop from "./components/ScrollToTop.tsx";
import navDirectory from "./data/nav.json";

const ORDER_ROUTES = ["/order", "/cart", "/checkout", "/payment", "/confirmation"];

function DecideNavbar() {
  const { pathname } = useLocation();
  return ORDER_ROUTES.includes(pathname) ? <OrderNavbar /> : <Navbar navDirectory={navDirectory} />;
}

function DecideFooter() {
  const { pathname } = useLocation();
  return ORDER_ROUTES.includes(pathname) ? null : <Footer />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <DecideNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
          <DecideFooter />
        </div>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
