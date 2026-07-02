import { capitalizeFirst } from '@/lib/capitalizeFirst';
import MenuItem from './MenuItem';

interface MenuItemType {
  id: string;
  category: string;
  itemName: string;
  itemDescription: string;
  price: string;
  image: string;
}

interface MenuCategoryProps {
  category: string;
  image: string;
  menuItems: MenuItemType[];
}

function MenuCategory({ category, image, menuItems }: MenuCategoryProps) {
  const filtered = menuItems.filter((item) => item.category === category);

  return (
    <div>
      <div className="h-37.5 border-border rounded-2xl relative mb-5.5 overflow-hidden">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-serif font-semibold text-[25px] mb-4.5 pb-3.5 border-b-border border-b">{capitalizeFirst(category)}</h3>
      {filtered.map((item) => (
        <MenuItem
          key={item.id}
          id={item.id}
          itemName={item.itemName}
          itemDescription={item.itemDescription}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default MenuCategory;
