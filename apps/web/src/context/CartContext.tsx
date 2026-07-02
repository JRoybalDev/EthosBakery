import { createContext, useContext, useState, ReactNode } from "react";
import allItems from "@/data/menuItems.json";

interface CartItem {
  id: string;
  category: string;
  itemName: string;
  itemDescription: string;
  price: string;
  image: string;
  quantity: number;
  priceNum: number;
}

export type OrderMode = "pickup" | "delivery";

interface CartContextType {
  cart: Record<string, number>;
  add: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clearCart: () => void;
  cartLines: CartItem[];
  count: number;
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  fmt: (n: number) => string;
  mode: OrderMode;
  setMode: (m: OrderMode) => void;
}

const CartContext = createContext<CartContextType | null>(null);

const DELIVERY_FEE = 4.99;

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [mode, setMode] = useState<OrderMode>("pickup");

  const add = (id: string) =>
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

  const dec = (id: string) =>
    setCart((prev) => {
      const next = { ...prev };
      if ((next[id] || 0) <= 1) delete next[id];
      else next[id]--;
      return next;
    });

  const remove = (id: string) =>
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });

  const clearCart = () => setCart({});

  const fmt = (n: number) => "$" + n.toFixed(2);

  const cartLines: CartItem[] = allItems
    .filter((item) => cart[item.id])
    .map((item) => {
      const priceNum = parseFloat(item.price.replace("$", ""));
      return { ...item, priceNum, quantity: cart[item.id] };
    });

  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const subtotal = cartLines.reduce((a, l) => a + l.priceNum * l.quantity, 0);
  const tax = subtotal * 0.095;
  const deliveryFee = mode === "delivery" ? DELIVERY_FEE : 0;
  const total = subtotal + tax + deliveryFee;

  return (
    <CartContext.Provider value={{ cart, add, dec, remove, clearCart, cartLines, count, subtotal, tax, deliveryFee, total, fmt, mode, setMode }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
