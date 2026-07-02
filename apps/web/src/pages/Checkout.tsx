import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import locations from "@/data/locations.json";

export default function Checkout() {
  const navigate = useNavigate();
  const { mode, setMode, total, fmt } = useCart();

  useEffect(() => { document.title = "Ethos Bakery | Checkout"; }, []);
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", locationIdx: 0 });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const modeBtn = (active: boolean) =>
    active
      ? "bg-royal-purple border-royal-purple text-white"
      : "bg-card border-hairline text-foreground";

  return (
    <div className="max-w-150 mx-auto px-4 md:px-9 pt-8 md:pt-11 pb-22.5">
      <button
        onClick={() => navigate("/cart")}
        className="border-none bg-transparent cursor-pointer text-royal-purple text-[13.5px] font-semibold mb-4.5 p-0 hover:scale-105 duration-300"
      >
        ← Back to cart
      </button>

      <h1 className="font-serif font-medium text-[42px] mb-6.5 tracking-[0.3px]">Checkout</h1>

      {/* Pickup / Delivery toggle */}
      <p className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground font-semibold mb-3">
        How would you like it?
      </p>
      <div className="grid grid-cols-2 gap-3 mb-7.5">
        <button
          onClick={() => setMode("pickup")}
          className={`text-left border-[1.5px] rounded-[14px] p-4.5 cursor-pointer font-sans hover:scale-105 duration-500 ${modeBtn(mode === "pickup")}`}
        >
          <div className="font-semibold text-[15px] mb-1">Pickup</div>
          <div className="text-[13px] opacity-80">Ready in ~20 min · free</div>
        </button>
        <button
          onClick={() => setMode("delivery")}
          className={`text-left border-[1.5px] rounded-[14px] p-4.5 cursor-pointer font-sans hover:scale-105 duration-500 ${modeBtn(mode === "delivery")}`}
        >
          <div className="font-semibold text-[15px] mb-1">Delivery</div>
          <div className="text-[13px] opacity-80">35-50 min · $4.99</div>
        </button>
      </div>

      {/* Contact fields */}
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-[13px] font-semibold text-muted-foreground mb-1.75">Full name</label>
          <input
            value={form.name}
            onChange={set("name")}
            placeholder="Your name"
            className="w-full border border-hairline bg-card rounded-[11px] py-3.25 px-3.75 text-[14px] text-foreground"
          />
        </div>
        <div className="flex gap-3.5">
          <div className="flex-1">
            <label className="block text-[13px] font-semibold text-muted-foreground mb-1.75">Phone</label>
            <input
              value={form.phone}
              onChange={set("phone")}
              placeholder="(323) 555–0000"
              className="w-full border border-hairline bg-card rounded-[11px] py-3.25 px-3.75 text-[14px] text-foreground"
            />
          </div>
          <div className="flex-1">
            <label className="block text-[13px] font-semibold text-muted-foreground mb-1.75">Email</label>
            <input
              value={form.email}
              onChange={set("email")}
              placeholder="you@email.com"
              className="w-full border border-hairline bg-card rounded-[11px] py-3.25 px-3.75 text-[14px] text-foreground"
            />
          </div>
        </div>

        {/* Pickup locations */}
        {mode === "pickup" && (
          <div>
            <label className="block text-[13px] font-semibold text-muted-foreground mb-1.75">
              Pickup location
            </label>
            {locations.map((loc, idx) => (
              <label
                key={idx}
                className="flex items-center gap-2.75 border border-hairline bg-card rounded-[11px] py-3.5 px-3.75 mb-2.5 cursor-pointer hover:scale-105 duration-500"
              >
                <span
                  className={`w-3.25 h-3.25 border-[1.5px] border-royal-purple rounded-full flex-none transition-colors ${
                    form.locationIdx === idx ? "bg-royal-purple" : ""
                  }`}
                />
                <input
                  type="radio"
                  name="location"
                  className="sr-only"
                  checked={form.locationIdx === idx}
                  onChange={() => setForm((p) => ({ ...p, locationIdx: idx }))}
                />
                <span className="text-[14px]">
                  <b className="font-semibold">{loc.businessName}</b> · {loc.location}
                </span>
              </label>
            ))}
          </div>
        )}

        {/* Delivery address */}
        {mode === "delivery" && (
          <div>
            <label className="block text-[13px] font-semibold text-muted-foreground mb-1.75">
              Delivery address
            </label>
            <input
              value={form.address}
              onChange={set("address")}
              placeholder="Street address, city, ZIP"
              className="w-full border border-hairline bg-card rounded-[11px] py-3.25 px-3.75 text-[14px] text-foreground"
            />
          </div>
        )}
      </div>

      {/* Total row */}
      <div className="flex justify-between items-baseline mt-7 pt-4.5 border-t border-border">
        <span className="text-[14px] text-muted-foreground">Total</span>
        <span className="font-serif text-[26px] font-semibold text-royal-purple">{fmt(total)}</span>
      </div>

      <button
        onClick={() => navigate("/payment")}
        className="w-full border-none bg-plum-ink text-white font-sans text-[15px] font-semibold py-4.25 rounded-[14px] cursor-pointer mt-4.5 hover:opacity-90 duration-300 hover:scale-105"
      >
        Continue to payment →
      </button>
    </div>
  );
}
