import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const navigate = useNavigate();
  const { cartLines, count, subtotal, tax, deliveryFee, total, fmt, add, dec, remove, mode } = useCart();

  const isEmpty = count === 0;

  return (
    <div className="max-w-180 mx-auto px-4 md:px-9 pt-8 md:pt-11 pb-22.5">
      <button
        onClick={() => navigate("/order")}
        className="border-none bg-transparent cursor-pointer text-royal-purple text-[13.5px] font-semibold mb-4.5 p-0 hover:scale-105 duration-300"
      >
        ← Add more items
      </button>

      <h1 className="font-serif font-medium text-[42px] mb-7 tracking-[0.3px]">
        Your cart
      </h1>

      {isEmpty ? (
        <div className="text-center py-17.5 px-5 bg-card border border-border rounded-2xl">
          <p className="font-serif text-[26px] mb-4 text-muted-foreground">Your cart is empty.</p>
          <button
            onClick={() => navigate("/order")}
            className="border-none bg-royal-purple text-white font-sans text-[14px] font-semibold py-3.25 px-7 rounded-full cursor-pointer hover:scale-105 duration-200"
          >
            Browse the menu
          </button>
        </div>
      ) : (
        <div>
          {/* Cart lines */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {cartLines.map((line) => (
              <div
                key={line.id}
                className="flex items-center gap-4 p-[18px_20px] border-b border-border last:border-b-0"
              >
                <div className="w-15 h-14 rounded-[10px] flex-none overflow-hidden [background:var(--ph)]">
                  <img src={line.image} alt={line.itemName} className="w-full h-full object-cover block" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-serif font-semibold text-[19px] m-0">{line.itemName}</p>
                  <p className="text-[13px] text-muted-foreground mt-0.5 m-0">{fmt(line.priceNum)} each</p>
                </div>

                {/* Stepper */}
                <div className="flex items-center border-[1.5px] border-hairline rounded-full overflow-hidden">
                  <button
                    onClick={() => dec(line.id)}
                    className="border-none bg-transparent text-foreground font-sans text-[16px] w-7.5 h-8 cursor-pointer"
                  >
                    −
                  </button>
                  <span className="min-w-5.5 text-center text-[14px] font-semibold">
                    {line.quantity}
                  </span>
                  <button
                    onClick={() => add(line.id)}
                    className="border-none bg-transparent text-foreground font-sans text-[16px] w-7.5 h-8 cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Line total */}
                <span className="font-serif text-[19px] font-semibold w-16 text-right">
                  {fmt(line.priceNum * line.quantity)}
                </span>

                {/* Remove */}
                <button
                  onClick={() => remove(line.id)}
                  className="border-none bg-transparent cursor-pointer text-muted-foreground text-[15px] p-1 hover:text-foreground duration-300 hover:scale-115"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="bg-card border border-border rounded-2xl p-[22px_24px] mt-4.5">
            <div className="flex justify-between text-[14.5px] text-muted-foreground mb-2.75">
              <span>Subtotal</span><span>{fmt(subtotal)}</span>
            </div>
            <div className="flex justify-between text-[14.5px] text-muted-foreground mb-2.75">
              <span>Estimated tax</span><span>{fmt(tax)}</span>
            </div>
            {mode === "delivery" && (
              <div className="flex justify-between text-[14.5px] text-muted-foreground mb-2.75">
                <span>Delivery</span><span>{fmt(deliveryFee)}</span>
              </div>
            )}
            <div className="flex justify-between items-baseline pt-3.25 border-t border-border mt-1">
              <span className="font-semibold text-[15px]">Total</span>
              <span className="font-serif text-[28px] font-semibold text-royal-purple">
                {fmt(total)}
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full border-none bg-plum-ink text-white font-sans text-[15px] font-semibold py-4.25 rounded-[14px] cursor-pointer mt-4.5 hover:opacity-90 duration-300 hover:scale-105"
          >
            Continue to checkout →
          </button>
        </div>
      )}
    </div>
  );
}
