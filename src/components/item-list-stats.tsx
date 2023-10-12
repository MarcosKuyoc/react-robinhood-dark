interface ItemStats {
  name: string;
  price: string;
}
export const ItemListStats: React.FC<ItemStats> = ({name, price}) => {
  return (
    <div className="flex justify-between border-b border-slate-800 pt-1 pb-1">
      <div className="text-gray-600 font-medium uppercase">{name}</div>
      <div className="text-white">{price}</div>
    </div>
  );
};
