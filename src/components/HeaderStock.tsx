import { useFetchDataTickers } from "@/hooks/useFetchTickers";
import { CheckCircle } from "@/icons";
import { usePaginationStore } from "@/store/store-pagination";

export const HeaderStock: React.FC = () => {
  const { page } = usePaginationStore();
  const { suggested } = useFetchDataTickers(page);

  return (
    <div className="flex justify-between">
      <div>
        <p className="text-white text-4xl">${suggested.eod?.close}</p>
        <div className="flex">
          <p className="text-color-green">{(suggested.eod?.close - suggested.eod?.open).toFixed(2)} ({suggested.percentage?.toFixed(2)}%)</p>
          <p className="ml-2 text-gray-600 uppercase">Today</p>
        </div>
        <p className="text-gray-600">228.30 +0.55 (0.24%) After - Hours</p>
      </div>
      <div>
        <CheckCircle />
        <p className="text-white text-right">{suggested.symbol}</p>
        <p className="text-gray-600 hidden sm:inline">{suggested.name} | Common Stock</p>
      </div>
    </div>
  );
};
