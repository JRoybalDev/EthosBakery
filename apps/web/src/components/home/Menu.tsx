import React from "react";
import { useNavigate } from "react-router-dom";
import MenuCategory from "../cards/menuCards/MenuCategory";
import menuItems from "@/data/menuItems.json";

const menuCategories = [
  { category: 'pastries', image: '/images/menu/images.jpeg' },
  { category: 'breads',   image: '/images/menu/images-4.jpeg' },
  { category: 'coffee',   image: '/images/menu/images-8.jpeg' },
];

function Menu() {
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
    <div id="menu" className="scroll-mt-17 px-11 py-26 bg-background">
      <div className="max-w-280 my-0 mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-5 mb-13.5">
          <div>
            <p className="text-sm tracking-[0.4em] uppercase text-purple-deep font-semibold mb-4">
              The Counter
            </p>
            <h2 className="font-serif font-medium text-[clamp(32px,4.5vw,52px)] m-0 tracking-[0.3px]">
              Today's Selection
            </h2>
          </div>
          <button
            onClick={() => handleRedirect("/order")}
            className="border-[1.5px] border-border text-purple-deep text-[13.5px] font-semibold px-6.5 py-3 rounded-4xl hover:cursor-pointer hover:scale-105 duration-300 tracking-[0.03em]"
          >
            Order for pickup & delivery →
          </button>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {menuCategories.map(({ category, image }, idx) => (
            <MenuCategory key={idx} category={category} image={image} menuItems={menuItems} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
