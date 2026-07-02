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
import PageTransition from "./components/PageTransition.tsx";
import navDirectory from "./data/nav.json";

const ORDER_ROUTES = ["/order", "/cart", "/checkout", "/payment", "/confirmation"];

function Layout() {
  const location = useLocation();
  const isOrderRoute = ORDER_ROUTES.includes(location.pathname);

  return (
    <div className="min-h-screen bg-background">
      {isOrderRoute ? <OrderNavbar /> : <Navbar navDirectory={navDirectory} />}
      <PageTransition location={location}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </PageTransition>
      {!isOrderRoute && <Footer />}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Layout />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
