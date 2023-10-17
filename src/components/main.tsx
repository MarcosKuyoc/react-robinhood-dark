import { StockChart } from "./charts/stock";
import { HeaderStock } from "./HeaderStock";
import { Stats } from "./stats";

export const Main = () => {
  return (
    <div className="p-5">
      <HeaderStock />
      <StockChart />
      <Stats />
    </div>
  );
};
