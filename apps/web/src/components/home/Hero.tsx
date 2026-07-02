import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import menuItems from "@/data/menuItems.json";

const SLIDE_INDICES = [0, 2, 4, 8, 10];
const SLIDES = SLIDE_INDICES.map((i) => ({ src: menuItems[i].image, alt: menuItems[i].itemName }));
const INTERVAL = 8000;

function Hero() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const handleRedirect = (url: string) => {
    if (url.startsWith("#")) {
      const el = document.querySelector(url);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(url);
    }
  };

  return (
    <div
      id="hero"
      className="scroll-mt-17 relative min-h-[84vh] flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={SLIDES[index].src}
          alt={SLIDES[index].alt}
          custom={direction}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 [background:linear-gradient(160deg,color-mix(in_oklab,var(--purple-deep)_75%,transparent),color-mix(in_oklab,var(--royal-purple)_60%,transparent)_60%,color-mix(in_oklab,var(--royal-blue)_65%,transparent))]" />

      <div className="relative text-center text-white p-10 animate-[fadeUp_.9s_ease_both]">
        <div className="flex justify-center mb-5.5">
          <img src="/logos/Ethos-White-512.png" className="w-16" />
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
          <button
            onClick={() => handleRedirect("/order")}
            className="bg-white text-purple-deep text-sm font-semibold py-3.5 px-7.5 rounded-4xl tracking-[0.03em] hover:cursor-pointer hover:scale-105 duration-300"
          >
            Order Now
          </button>
          <a
            onClick={() => handleRedirect("#menu")}
            className="border-[1.5px] border-white/70 text-sm font-semibold px-7 py-3.25 rounded-4xl tracking-[0.03em] hover:cursor-pointer hover:scale-105 duration-300"
          >
            Explore Menu
          </a>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? "bg-white scale-125" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
