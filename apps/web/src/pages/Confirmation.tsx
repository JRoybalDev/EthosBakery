import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Confirmation() {
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => { document.title = "Ethos Bakery | Order Confirmed"; }, []);
  const orderNo: string = state?.orderNo ?? "ETH-????";
  const mode: string = state?.mode === "delivery" ? "Delivery" : "Pickup";

  return (
    <div className="max-w-130 mx-auto px-5 md:px-9 pt-16 md:pt-22.5 pb-22.5 text-center">
      {/* Diamond check */}
      <div className="flex justify-center mb-7 animate-[pop_0.5s_ease_both]">
        <div className="w-16 h-16 border-2 border-royal-purple rotate-45 flex items-center justify-center">
          <span className="-rotate-45 text-royal-purple text-[30px]">✓</span>
        </div>
      </div>

      <h1 className="font-serif font-medium text-[44px] mb-3.5 tracking-[0.3px]">Order confirmed</h1>
      <p className="text-[16px] text-muted-foreground leading-[1.7] max-w-95 mx-auto mb-2">
        Thank you — we're firing up the oven. You'll get a text when your order is ready.
      </p>
      <p className="text-[13px] tracking-widest text-muted-foreground mt-4.5 mb-8.5">
        ORDER {orderNo} · {mode}
      </p>

      <button
        onClick={() => navigate("/")}
        className="border-none bg-plum-ink text-white font-sans text-[14px] font-semibold py-3.5 px-7.5 rounded-full cursor-pointer hover:opacity-90 duration-300 hover:scale-105"
      >
        Back to site
      </button>
    </div>
  );
}
