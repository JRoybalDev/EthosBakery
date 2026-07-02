import React from "react";
import { useNavigate } from "react-router-dom";
import MenuCategory from "../cards/menuCards/MenuCategory";

const menuItems = [
  {
    id: "p1",
    category: "pastries",
    itemName: "Almond Croissant",
    itemDescription: "Twice-baked, frangipane, dusted sugar",
    price: "$2.75",
    image: "/images/hero.png",
  },
  {
    id: "p2",
    category: "pastries",
    itemName: "Pain au Chocolat",
    itemDescription: "Two batons of dark Valrhona",
    price: "$4.75",
    image: "/images/hero.png",
  },
  {
    id: "p3",
    category: "pastries",
    itemName: "Morning Bun",
    itemDescription: "Orange zest, cinnamon, crackly edges",
    price: "$5.00",
    image: "/images/hero.png",
  },
  {
    id: "p4",
    category: "pastries",
    itemName: "Kouign-Amann",
    itemDescription: "Caramelized laminated layers",
    price: "$5.25",
    image: "/images/hero.png",
  },
  {
    id: "b1",
    category: "breads",
    itemName: "Country Sourdough",
    itemDescription: "3-day ferment, blistered crust",
    price: "$9.00",
    image: "/images/hero.png",
  },
  {
    id: "b2",
    category: "breads",
    itemName: "Sesame Baguette",
    itemDescription: "Crisp crust, open crumb",
    price: "$4.50",
    image: "/images/hero.png",
  },
  {
    id: "b3",
    category: "breads",
    itemName: "Seeded Rye",
    itemDescription: "Caraway, flax & sunflower",
    price: "$8.50",
    image: "/images/hero.png",
  },
  {
    id: "b4",
    category: "breads",
    itemName: "Brioche Loaf",
    itemDescription: "Cultured butter, feather-soft",
    price: "$7.00",
    image: "/images/hero.png",
  },
  {
    id: "c1",
    category: "coffee",
    itemName: "Cortado",
    itemDescription: "Equal parts espresso & milk",
    price: "$4.25",
    image: "/images/hero.png",
  },
  {
    id: "c2",
    category: "coffee",
    itemName: "Honey Lavender Latte",
    itemDescription: "House syrup, single-origin",
    price: "$6.00",
    image: "/images/hero.png",
  },
  {
    id: "c3",
    category: "coffee",
    itemName: "Cold Brew",
    itemDescription: "18-hour steep, deep & smooth",
    price: "$5.00",
    image: "/images/hero.png",
  },
  {
    id: "c4",
    category: "coffee",
    itemName: "Cappuccino",
    itemDescription: "Dense microfoam, dark roast",
    price: "$4.50",
    image: "images/cappuccino.png",
  },
];

const menuCategories = ['pastries', 'breads', 'coffee'];

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
    <div id="#menu" className="scroll-mt-17 px-11 py-26 bg-background">
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
          {menuCategories.map((category, idx) => (
            <MenuCategory key={idx} category={category} menuItems={menuItems}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
