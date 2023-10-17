import StockChartUp from "@/assets/stock.svg";
import StockChartDown from "@/assets/negStock.svg";
import { DataTickers } from "@/services/tickers.interface";

interface Props {
  selected?: boolean;
  imageDown?: boolean;
  data: DataTickers
}

const ItemTicker: React.FC<Props> = ({selected, data}) => {
  return (
    <a href="#" className={`flex hover:bg-primary ${selected ? 'bg-primary' : 'bg-secondary'}`}>
      <div className="w-full flex border-b border-slate-800 pt-2 pb-2 ml-6">
        <div className="flex flex-col">
          <p className="w-1/3 text-white">{data.symbol}</p>
          <p className="text-gray-400 uppercase">{data.stock_exchange?.acronym}</p>
        </div>
        <div className="w-1/3 flex justify-center">
          <img src={(data.percentage! > 0 && data.percentage !== null) ? StockChartUp : StockChartDown} alt="StockChart" className="w-1/2" />
        </div>
        <div className="w-1/3 flex flex-col justify-center">
          <div className="flex">
            <p className="text-color-green">
              $ {data.eod?.close}
            </p>
            <p className="text-gray-400 pl-2">{data.stock_exchange?.country}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ItemTicker;
