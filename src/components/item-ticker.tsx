import StockChartUp from "../assets/stock.svg";
import StockChartDown from "../assets/negStock.svg";

interface Props {
  selected?: boolean;
  imageDown?: boolean;
}

const ItemTicker: React.FC<Props> = ({selected, imageDown = false}) => {
  return (
    <div className={`flex ${selected ? 'bg-primary' : 'bg-secundary'}`}>
      <div className="w-full flex border-b border-slate-800 pt-2 pb-2 ml-6">
        <div className="flex flex-col">
          <p className="w-1/3 text-white">AAPL</p>
          <p className="text-gray-400 uppercase">NASDAQ</p>
        </div>
        <div className="w-1/3 flex justify-center">
          <img src={(!imageDown) ? StockChartUp : StockChartDown} alt="StockChart" className="w-1/2" />
        </div>
        <div className="w-1/3 flex flex-col justify-center">
          <div className="flex">
            <p className="text-color-green">
              $105.67
            </p>
            <p className="text-gray-400 pl-2">USD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTicker;
