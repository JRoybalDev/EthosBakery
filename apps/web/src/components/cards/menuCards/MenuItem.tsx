interface MenuItemProps {
  id: string;
  itemName: string;
  itemDescription: string;
  price: string;
}

function MenuItem({ id, itemName, itemDescription, price }: MenuItemProps) {
  return (
    <div key={id} className="flex justify-between items-start gap-3 mb-4">
      <div className="min-w-0">
        <p className="text-[15px] font-semibold text-plum-ink">{itemName}</p>
        <p className="text-sm text-subtle-ink mt-0.75 leading-[1.4]">{itemDescription}</p>
      </div>
      <span className="font-serif text-[19px] text-primary font-semibold whitespace-nowrap">{price}</span>
    </div>
  );
}

export default MenuItem;
