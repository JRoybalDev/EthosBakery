import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderNavbar() {
  const [cartCount, setCartCount] = useState(1);

  const navigate = useNavigate();

  const handleRedirect = (url: string) => {
    if (url.startsWith("#")) {
      const el = document.querySelector(url);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(url);
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between py-3.75 px-9 bg-[color-mix(in_oklab,var(--background)_86%,transparent)] backdrop-blur-md border-b border-b-border">
      <button
        onClick={() => handleRedirect("/")}
        className="flex items-center gap-2.25 cursor-pointer text-plum-ink text-[13.5px] font-medium hover:scale-105 duration-300"
      >
        ← Back to site
      </button>
      <div className="flex items-center gap-2.5">
        <div className="w-12 hover:cursor-pointer hover:scale-105 duration-300">
          <img
            className="object-cover"
            src="/logos/Ethos-PurpleDeep-512.png"
            onClick={() => handleRedirect("/")}
          />
        </div>
      </div>
      <button onClick={() => handleRedirect('/cart')} className="relative flex items-center gap-2 border-[1.5px] border-border bg-card cursor-pointer text-plum-ink text-[13px] font-semibold py-2.25 px-4 rounded-4xl hover:scale-105 duration-300">
        Cart
        <span className="min-w-5 h-5 px-1.25 bg-purple-deep text-white rounded-full text-[11.5px] inline-flex items-center justify-center animate-[pop_0.3s_ease]">{cartCount !== 0 && cartCount}</span>
      </button>
    </header>
  );
}

export default OrderNavbar;
