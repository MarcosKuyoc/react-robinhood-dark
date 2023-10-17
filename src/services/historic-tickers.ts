import { dateFormat } from "@/helpers/parse-date";
import { EodResponse } from "./tickers.interface";

export const fetchHistoricTickers = async (symbol: string, startDate: string, endDate: string) => {
  console.log(`${startDate}-${endDate}`);
  const res = await fetch(`/data/eod-${symbol}.json`);
  const data = await res.json();
  if (!res.ok) throw new Error('Network not found');
  const eod: EodResponse[] = data;

  const result = eod.map((item) => {
    return  {
      name: item.date ? dateFormat(item.date) : item.date,
      open: item.open,
      close: item.close
    }
  })
  
  return {
    eod: result,
  };
};