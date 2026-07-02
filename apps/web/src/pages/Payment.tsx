import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function Payment() {
  const navigate = useNavigate();
  const { subtotal, tax, deliveryFee, total, fmt, mode, clearCart } = useCart();

  const [form, setForm] = useState({ card: "", expiry: "", cvc: "", name: "" });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handlePlaceOrder = () => {
    clearCart();
    const orderNo = "ETH-" + Math.floor(1000 + Math.random() * 9000);
    navigate("/confirmation", { state: { orderNo, mode } });
  };

  return (
    <div className="max-w-140 mx-auto px-4 md:px-9 pt-8 md:pt-11 pb-22.5">
      <button
        onClick={() => navigate("/checkout")}
        className="border-none bg-transparent cursor-pointer text-royal-purple text-[13.5px] font-semibold mb-4.5 p-0 duration-300 hover:scale-105"
      >
        ← Back to checkout
      </button>

      <h1 className="font-serif font-medium text-[42px] mb-6.5 tracking-[0.3px]">Payment</h1>

      {/* Order summary */}
      <div className="bg-soft-lavender rounded-2xl p-[20px_22px] mb-6.5">
        <div className="flex justify-between text-[14px] text-muted-foreground mb-2.25">
          <span>Subtotal</span><span>{fmt(subtotal)}</span>
        </div>
        <div className="flex justify-between text-[14px] text-muted-foreground mb-2.25">
          <span>Tax</span><span>{fmt(tax)}</span>
        </div>
        {mode === "delivery" && (
          <div className="flex justify-between text-[14px] text-muted-foreground mb-2.25">
            <span>Delivery</span><span>{fmt(deliveryFee)}</span>
          </div>
        )}
        <div className="flex justify-between items-baseline pt-2.75 border-t border-hairline">
          <span className="font-semibold text-[14px]">Total due</span>
          <span className="font-serif text-[25px] font-semibold text-royal-purple">{fmt(total)}</span>
        </div>
      </div>

      {/* Card fields */}
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-[13px] font-semibold text-muted-foreground mb-1.75">Card number</label>
          <input
            value={form.card}
            onChange={set("card")}
            placeholder="1234  5678  9012  3456"
            maxLength={19}
            className="w-full border border-hairline bg-card rounded-[11px] py-3.25 px-3.75 text-[14px] text-foreground"
          />
        </div>
        <div className="flex gap-3.5">
          <div className="flex-1">
            <label className="block text-[13px] font-semibold text-muted-foreground mb-1.75">Expiry</label>
            <input
              value={form.expiry}
              onChange={set("expiry")}
              placeholder="MM / YY"
              maxLength={7}
              className="w-full border border-hairline bg-card rounded-[11px] py-3.25 px-3.75 text-[14px] text-foreground"
            />
          </div>
          <div className="w-[120px]">
            <label className="block text-[13px] font-semibold text-muted-foreground mb-1.75">CVC</label>
            <input
              value={form.cvc}
              onChange={set("cvc")}
              placeholder="123"
              maxLength={4}
              className="w-full border border-hairline bg-card rounded-[11px] py-3.25 px-3.75 text-[14px] text-foreground"
            />
          </div>
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-muted-foreground mb-1.75">Name on card</label>
          <input
            value={form.name}
            onChange={set("name")}
            placeholder="Full name"
            className="w-full border border-hairline bg-card rounded-[11px] py-3.25 px-3.75 text-[14px] text-foreground"
          />
        </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full border-none bg-royal-purple text-white font-sans text-[15px] font-semibold py-4.25 rounded-[14px] cursor-pointer mt-6 hover:opacity-90 duration-500 hover:scale-105"
      >
        Place order · {fmt(total)}
      </button>
      <p className="text-center text-[12.5px] text-muted-foreground mt-3.5 mb-0">
        🔒 Prototype only — no real payment is processed.
      </p>
    </div>
  );
}
