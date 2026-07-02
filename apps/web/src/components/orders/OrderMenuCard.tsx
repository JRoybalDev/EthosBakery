import { useCart } from "@/context/CartContext";

interface MenuItemType {
  id: string;
  category: string;
  itemName: string;
  itemDescription: string;
  price: string;
  image: string;
}

interface OrderMenuCardProps {
  menuItem: MenuItemType;
}

function OrderMenuCard({ menuItem }: OrderMenuCardProps) {
  const { cart, add, dec } = useCart();
  const qty = cart[menuItem.id] || 0;

  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border flex flex-col">
      <div className="h-37 relative overflow-hidden [background:var(--ph)]">
        <img src={menuItem.image} alt={menuItem.itemName} className="w-full h-full object-cover block" />
      </div>
      <div className="p-4.5 flex flex-col flex-1">
        <p className="font-serif font-semibold text-[21px] leading-[1.15] mb-1.25">{menuItem.itemName}</p>
        <p className="text-[13px] text-muted-foreground leading-normal mb-4 flex-1">{menuItem.itemDescription}</p>
        <div className="flex items-center justify-between gap-2.5">
          <span className="font-serif text-[20px] font-semibold text-royal-purple">{menuItem.price}</span>
          {qty === 0 ? (
            <button
              onClick={() => add(menuItem.id)}
              className="border-none bg-royal-purple text-white font-sans text-[13px] font-semibold py-2.25 px-4.5 rounded-full cursor-pointer hover:scale-105 duration-200"
            >
              Add
            </button>
          ) : (
            <div className="flex items-center border-[1.5px] border-royal-purple rounded-full overflow-hidden">
              <button
                onClick={() => dec(menuItem.id)}
                className="border-none bg-transparent text-royal-purple text-[17px] w-8 h-8.5 cursor-pointer leading-none"
              >
                -
              </button>
              <span className="min-w-5.5 text-center text-[14px] font-semibold text-royal-purple">
                {qty}
              </span>
              <button
                onClick={() => add(menuItem.id)}
                className="border-none bg-royal-purple text-white text-[17px] w-8.5 h-8.5 cursor-pointer leading-none"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderMenuCard;
