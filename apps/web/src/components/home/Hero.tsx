import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleRedirect = (url: string) => {
    if (url.startsWith('#')) {
      const el = document.querySelector(url);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(url);
    }
  };

  return (
    <div
      id="#hero"
      className="scroll-mt-17 relative min-h-[84vh] flex items-center justify-center overflow-hidden"
    >
      <div>
        <img
          src="/hero.png"
          alt="hero image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 [background:linear-gradient(180deg, color-mix(in oklab, var(--plum-ink) 22%, transparent), color-mix(in oklab, var(--plum-ink) 52%, transparent))]"></div>
      </div>
      <div className="relative text-center text-white p-10 animate-[fadeUp_.9s_ease_both]">
        <div className="flex justify-center mb-5.5">
          <img src="/logos/Ethos-White-512.png" className="w-16"/>
        </div>
        <p className="text-[12.5px] font-sans uppercase mb-4 font-semibold opacity-[.82] tracking-[.42em]">
          Los Angeles · Est. 2019
        </p>
        <h1 className="font-serif font-medium leading-[0.96] text-[clamp(52px,8vw,104px)] m-0 tracking-[0.5px]">
          Ethos Bakery
        </h1>
        <p className="font-serif italic text-[clamp(20px,2.6vw,30px)] mt-4.5 opacity-90">
          Bread, pastry & coffee, made with intention.
        </p>
        <div className="flex gap-3.5 justify-center mt-8.5">
          <button onClick={() => handleRedirect('/order')} className="bg-white text-purple-deep text-sm font-semibold py-3.5 px-7.5 rounded-4xl tracking-[0.03em] hover:cursor-pointer hover:scale-105 duration-300">
            Order Now
          </button>
          <a href="#menu" className="border-[1.5px] border-white/70 text-sm font-semibold px-7 py-3.25 rounded-4xl tracking-[0.03em] hover:cursor-pointer hover:scale-105 duration-300">
            Explore Menu
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
