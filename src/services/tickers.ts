import { getValueMaximo } from "@/helpers/get-value-max";
import { DataTickers } from "./tickers.interface";

export const fetchTickers = async (page: number = 0) => {
  const limit = 10;
  const offset = page * limit;
  const res = await fetch(`/data/tickers-${offset}.json`);
  const data = await res.json();
  if (!res.ok) throw new Error('Network not found');
  const tickers = data.data;
  const suggested = await getValueMaximo<DataTickers>(tickers, 'latestEndOfDayClosePrice');
  
  return {
    tickers,
    suggested
  };
};