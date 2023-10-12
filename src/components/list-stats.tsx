import { ItemListStats } from "./item-list-stats";

export const ListStats = () => {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col mr-10">
        <ItemListStats name="Open" price="215.77" />
        <ItemListStats name="Hight" price="228.89" />
        <ItemListStats name="Low" price="215.00" />
        <ItemListStats name="52 WK Hight" price="286.65" />
        <ItemListStats name="52 wk Low" price="141.05" />
      </div>
      <div className="w-1/2 flex flex-col">
        <ItemListStats name="Volume" price="2.73M" />
        <ItemListStats name="AVG Volume" price="4.33M" />
        <ItemListStats name="MKT Cap" price="29.25B" />
        <ItemListStats name="P/E Ratio" price="--" />
        <ItemListStats name="DIV/YIED" price="0.0" />
      </div>
    </div>
  );
};
