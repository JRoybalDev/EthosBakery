import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import OrderMenuCard from "@/components/orders/OrderMenuCard";
import SearchFilters from "@/components/orders/SearchFilters";
import { useCart } from "@/context/CartContext";
import allMenuItems from "@/data/menuItems.json";

export default function Order() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const { count, subtotal, fmt } = useCart();
  const navigate = useNavigate();

  const filteredItems = useMemo(() => {
    return allMenuItems.filter((item) => {
      const matchesCategory =
        activeFilter === "All" || item.category === activeFilter.toLowerCase();
      const matchesSearch =
        item.itemName.toLowerCase().includes(search.toLowerCase()) ||
        item.itemDescription.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeFilter]);

  return (
    <div className="max-w-280 my-0 mx-auto pt-11 px-9 pb-22.5">
      <h1 className="font-serif font-medium text-[46px] mb-1.5 tracking-[0.3px]">
        Build your order
      </h1>
      <p className="text-[15px] text-muted-foreground mb-7.5">
        Pickup or delivery across Los Angeles · ready in ~20 min
      </p>

      <SearchFilters
        search={search}
        activeFilter={activeFilter}
        onSearch={setSearch}
        onFilter={setActiveFilter}
      />

      {filteredItems.length < 1 ? (
        <div className="text-center py-20 px-5 text-muted-foreground">
          <p className="font-serif text-[28px] mb-2 text-foreground">Nothing matches that.</p>
          <p className="text-sm m-0">Try another search or category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {filteredItems.map((menuItem) => (
            <OrderMenuCard key={menuItem.id} menuItem={menuItem} />
          ))}
        </div>
      )}

      {count > 0 && (
        <div className="fixed bottom-5.5 left-0 right-0 flex justify-center pointer-events-none z-40">
          <button
            onClick={() => navigate("/cart")}
            className="flex items-center gap-3.5 border-none bg-plum-ink text-white font-sans text-[14px] font-semibold py-3.75 px-6.5 rounded-full cursor-pointer [box-shadow:0_8px_28px_rgba(0,0,0,0.18)] hover:scale-105 duration-200 pointer-events-auto"
          >
            <span>View cart · {count} item{count !== 1 ? "s" : ""}</span>
            <span className="font-serif text-[17px]">{fmt(subtotal)}</span>
            <span className="opacity-70">→</span>
          </button>
        </div>
      )}
    </div>
  );
}
