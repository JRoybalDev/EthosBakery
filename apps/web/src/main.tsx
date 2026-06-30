import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navigation/Navbar.tsx";
import Footer from "./components/navigation/Footer.tsx";
import Home from "./pages/Home.tsx";
import Order from "./pages/Order.tsx";

export const navDirectory = [
  { label: "Home", url: "#hero" },
  { label: "About", url: "#about" },
  { label: "Locations", url: "#locations" },
  { label: "Menu", url: "#menu" },
  { label: "Order", url: "/order" },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Navbar navDirectory={navDirectory}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
